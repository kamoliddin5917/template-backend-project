import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';
import { ResData } from './resData';
import { Request } from 'express';
import { LanguageEnum } from 'src/common/enums/enum';
import { isJSON } from 'class-validator';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: any, host: ArgumentsHost): void {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const req = ctx.getRequest<Request>();

    const responseBody = new ResData(
      '',
      HttpStatus.INTERNAL_SERVER_ERROR,
      null,
      exception,
    );

    if (exception instanceof HttpException) {
      responseBody.statusCode = exception.getStatus();

      let response = exception.getResponse() as any;

      if (typeof response === 'string' && isJSON(response)) {
        response = JSON.parse(response);
      }

      if (response.labels?.length) {
        const lang = req.headers?.language;

        switch (lang) {
          case LanguageEnum.EN:
            responseBody.message = response.labels[0];
            break;
          case LanguageEnum.RU:
            responseBody.message = response.labels[1];
            break;
          case LanguageEnum.UZ:
            responseBody.message = response.labels[2];
            break;
          case LanguageEnum.KRIL:
            responseBody.message = response.labels[3];
            break;
          default:
            responseBody.message = response.labels[0];
        }
      } else {
        responseBody.message = response?.message.toString();
      }
    } else {
      responseBody.message = exception.message;
      responseBody?.error['status']
        ? (responseBody.statusCode = responseBody.error['status'])
        : 500;
    }

    this.logger.error({
      message: responseBody.message,
      status: responseBody.statusCode,
      user: 'none',
      stack: responseBody.error,
    });

    httpAdapter.reply(ctx.getResponse(), responseBody, responseBody.statusCode);
  }
}
