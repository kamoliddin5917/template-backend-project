import { HttpException, HttpStatus } from '@nestjs/common';

import { getPrompt } from 'src/common/prompts/prompts';

export class AuthorizationError extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'authorization_error')),
      HttpStatus.UNAUTHORIZED,
    );
  }
}

export class ForbiddenError extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'forbidden_error')),
      HttpStatus.FORBIDDEN,
    );
  }
}
