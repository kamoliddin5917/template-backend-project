import { Inject, Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { BaseService } from 'src/common/database/base.service';
import { FileEntity } from './entities/file.entity';
import { IFileService } from './interfaces/file.service';
import { IFileRepository } from './interfaces/file.repository';

@Injectable()
export class FileService
  extends BaseService<CreateFileDto, UpdateFileDto, FileEntity>
  implements IFileService
{
  constructor(
    @Inject('IFileRepository')
    private readonly fileRepository: IFileRepository,
  ) {
    super(fileRepository, 'file');
  }
}
