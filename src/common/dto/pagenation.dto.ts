import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class PagenationDto {
  @ApiPropertyOptional({
    default: 1,
    required: false,
  })
  @Type(() => Number)
  @IsPositive()
  @IsInt()
  @Min(1)
  @IsOptional()
  page?: number = 1;

  @ApiPropertyOptional({
    default: 10,
    required: false,
  })
  @Type(() => Number)
  @IsPositive()
  @IsInt()
  @Min(10)
  @IsOptional()
  pageSize?: number = 10;
}
