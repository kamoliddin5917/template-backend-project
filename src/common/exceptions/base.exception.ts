import { HttpException, HttpStatus } from '@nestjs/common';
import { getPrompt } from '../prompts/prompts';

export class BaseNotFoundHttpException extends HttpException {
  constructor(entity: string) {
    const errorPromt = getPrompt('application', 'base_not_found');
    errorPromt.labels = errorPromt.labels.map((mes) => {
      const messages = mes.split(' ');

      return `${entity} ${messages[messages.length - 2]} ${messages[messages.length - 1]}`;
    });
    super(JSON.stringify(errorPromt), HttpStatus.NOT_FOUND);
  }
}
