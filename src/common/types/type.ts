import { Request } from 'express';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LanguageEnum } from '../enums/enum';

export type ID = number;

export interface IConfige {
  SERVER_PORT: number;
  JWT_KEY: string;
  DB_URL: string;
  JWT_EXPIRES_IN: string;
}

export interface ILanguage {
  language: LanguageEnum;
}

export interface IFindOneOption {
  select?: object;
  relations?: string[];
  where: object;
}

export interface IFindOption extends Partial<IFindOneOption> {
  skip?: number;
  take?: number;
}

export interface RequestWithPayload extends Request {
  user: UserEntity;
}

export interface ICurrentUser extends UserEntity {}
