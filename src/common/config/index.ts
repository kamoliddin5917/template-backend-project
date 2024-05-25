import * as Joi from 'joi';
import { IConfige } from '../types/type';
import { config as dotenv } from 'dotenv';
dotenv();

export const configSchema = Joi.object<IConfige, true>({
  SERVER_PORT: Joi.number().required(),
  JWT_KEY: Joi.string().required(),
  DB_URL: Joi.string().required(),
  JWT_EXPIRES_IN: Joi.string().required(),
});

export const config: IConfige = {
  SERVER_PORT: Number(process.env.SERVER_PORT),
  JWT_KEY: process.env.JWT_KEY,
  DB_URL: process.env.DB_URL,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
};
