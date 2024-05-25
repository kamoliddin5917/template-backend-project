import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ICurrentUser, RequestWithPayload } from '../types/type';

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext): ICurrentUser => {
    const request: RequestWithPayload = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
