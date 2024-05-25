import { HttpException, HttpStatus } from '@nestjs/common';
import { getPrompt } from 'src/common/prompts/prompts';

export class LoginAlreadyUsedException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'login_already_used')),
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class OneIdAlreadyUsedException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'one_id_already_used')),
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class JshshirAlreadyUsedException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'jshshir_already_used')),
      HttpStatus.BAD_REQUEST,
    );
  }
}
