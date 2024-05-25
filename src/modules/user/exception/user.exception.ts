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
