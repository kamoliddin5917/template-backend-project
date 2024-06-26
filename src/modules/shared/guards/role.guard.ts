import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from 'src/common/consts/const';
import { RoleEnum } from 'src/common/enums/enum';
import { ForbiddenError } from '../exception/AuthorizationError';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Array<RoleEnum>>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();

    const result = requiredRoles.some((role) => user.roles?.includes(role));

    if (!result) {
      throw new ForbiddenError();
    } else {
      return true;
    }
  }
}
