import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthorizationError } from '../../exception/AuthorizationError';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }

  handleRequest<UserEntity>(err: any, user: UserEntity) {
    if (err || !user) {
      throw new AuthorizationError();
    }
    return user;
  }
}
