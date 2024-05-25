import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  InternalServerErrorException,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AllExceptionsFilter } from './lib/AllExceptionFilter';
import { config, configSchema } from './common/config';
import { WinstonModule } from 'nest-winston';
import { transports } from './lib/logService';
import * as winston from 'winston';
import { join } from 'path';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const logger = new Logger('main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const { error } = configSchema.validate(config);
  if (error) {
    logger.error(error.message, error);

    throw new InternalServerErrorException(error.message);
  }

  app.enableCors();

  app.use(bodyParser.json({ limit: '20mb' }));
  app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));

  const httpAdapterHost = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapterHost));

  app.setGlobalPrefix('api');

  app.useStaticAssets(join(__dirname, '../uploads'));

  app.useGlobalPipes(
    new ValidationPipe({
      // transform: true,
      // whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle('Japanese')
    .setDescription('this is v1')
    .setVersion('1.0.0')
    .addTag('Your API Tag ok')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  app.useLogger(
    WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json(),
      ),
      transports: [
        transports.console,
        transports.combinedFile,
        transports.errorFile,
        transports.fatalFile,
      ],
    }),
  );

  await app.listen(config.SERVER_PORT, () => {
    logger.log(`Server: http://localhost:${config.SERVER_PORT}`);
    logger.log(`Swagger docs: http://localhost:${config.SERVER_PORT}/api/docs`);
  });
}
bootstrap();
