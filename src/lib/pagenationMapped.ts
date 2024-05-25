import { PagenationDto } from 'src/common/dto/pagenation.dto';

export function pagenationMapped(pageDto: PagenationDto): {
  skip: number;
  take: number;
} {
  if (!pageDto.page) {
    pageDto.page = 1;
  }

  if (!pageDto.pageSize) {
    pageDto.pageSize = 10;
  }

  return {
    take: pageDto.pageSize,
    skip: (pageDto.page - 1) * pageDto.pageSize,
  };
}
