import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginUserDto {
  @ApiProperty({ type: String, example: 'test' })
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty({ type: String, example: 'test' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
