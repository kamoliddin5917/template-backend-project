import { HttpException, HttpStatus } from '@nestjs/common';
import { getPrompt } from 'src/common/prompts/prompts';

export class FileRequiredException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'file_required')),
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class FileTypeMustBeImageException extends HttpException {
  constructor() {
    super(
      JSON.stringify(getPrompt('application', 'file_type_must_be_image')),
      HttpStatus.BAD_REQUEST,
    );
  }
}
