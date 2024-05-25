import { HttpException, HttpStatus } from '@nestjs/common';
import { getPrompt } from 'src/common/prompts/prompts';

export class PhoneOrPasswordWrongException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'login_or_password_wrong')),
      HttpStatus.UNAUTHORIZED,
    );
  }
}
