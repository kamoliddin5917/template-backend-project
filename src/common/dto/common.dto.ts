import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, Min } from 'class-validator';
import { ID, ILanguage } from '../types/type';
import * as Joi from 'joi';
import { LanguageEnum } from '../enums/enum';

export class ObjDto {
  @ApiProperty({
    type: Number,
    description: 'id',
  })
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  id: ID;
}

const languageEnumValues = Object.values(LanguageEnum);

export const languageSchema = Joi.object<ILanguage, true>({
  language: Joi.string()
    .valid(...languageEnumValues)
    .required(),
});
