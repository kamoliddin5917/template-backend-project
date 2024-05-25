import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { RoleEnum } from 'src/common/enums/enum';

export class CreateUserDto {
  @ApiPropertyOptional({ type: String, example: 'test' })
  @IsString()
  @IsOptional()
  login: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: 'test' })
  @IsString()
  @IsOptional()
  password: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: 'falonchi' })
  @IsString()
  @IsOptional()
  firstname: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: 'falonchiyev' })
  @IsString()
  @IsOptional()
  lastname: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: "falonchi o'g'li" })
  @IsString()
  @IsOptional()
  middlename: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: '123456789' })
  @IsString()
  @IsOptional()
  jshshir: Nullable<string>;

  @ApiPropertyOptional({
    type: String,
    example: 'https://railway.uz/upload/test.jpg',
  })
  @IsString()
  @IsOptional()
  avatar: Nullable<string>;

  @ApiPropertyOptional({ type: String, example: '123456789' })
  @IsString()
  @IsOptional()
  oneIdLogin: Nullable<string>;

  @ApiPropertyOptional({ enum: [RoleEnum], example: [RoleEnum.SUPER_ADMIN] })
  @IsArray()
  @Type(() => String)
  @IsEnum(RoleEnum, { each: true })
  @ArrayMinSize(1)
  @IsNotEmpty()
  roles: Array<RoleEnum>;

  @ApiProperty({ type: Boolean, example: true })
  @IsBoolean()
  @IsNotEmpty()
  isVerified: boolean;

  @ApiProperty({ type: Boolean, example: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
