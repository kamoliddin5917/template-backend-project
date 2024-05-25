import { BaseRepository } from 'src/common/database/base.repository';
import { CreateFileDto } from '../dto/create-file.dto';
import { FileEntity } from '../entities/file.entity';

export interface IFileRepository
  extends BaseRepository<CreateFileDto, FileEntity> {}
