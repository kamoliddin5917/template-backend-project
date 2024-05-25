import * as winston from 'winston';
import * as winstonDailyRotateFile from 'winston-daily-rotate-file';

export interface IInfo {
  context: string;
  level: string;
  message: undefined;
  timestamp: string;
}

export const transports = {
  console: new winston.transports.Console({
    level: 'silly',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.colorize({
        colors: {
          info: 'blue',
          debug: 'yellow',
          error: 'red',
        },
      }),
      winston.format.printf((info: IInfo) => {
        return `${info.timestamp} [${info.level}] [${info.context}] ${
          info.message ? (info.message as string) : 'DEFAULT_MESSAGE'
        }`;
      }),
    ),
  }),
  combinedFile: new winstonDailyRotateFile({
    dirname: 'logs',
    filename: 'combined',
    extension: '.log',
    level: 'info',
  }) as winstonDailyRotateFile,
  errorFile: new winstonDailyRotateFile({
    dirname: 'logs',
    filename: 'error',
    extension: '.log',
    level: 'error',
  }) as winstonDailyRotateFile,
  fatalFile: new winstonDailyRotateFile({
    dirname: 'logs',
    filename: 'fatal',
    extension: '.log',
    level: 'fatal',
  }) as winstonDailyRotateFile,
};
