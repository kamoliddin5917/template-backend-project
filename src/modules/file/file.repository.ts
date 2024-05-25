import { Injectable } from '@nestjs/common';
import { BaseRepository } from 'src/common/database/base.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { FileEntity } from './entities/file.entity';
import { IFileRepository } from './interfaces/file.repository';

@Injectable()
export class FileRepository
  extends BaseRepository<CreateFileDto, FileEntity>
  implements IFileRepository
{
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {
    super(fileRepository);
  }
}
