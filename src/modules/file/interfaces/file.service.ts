import { ResData } from 'src/lib/resData';
import {
  ICurrentUser,
  ID,
  IFindOneOption,
  IFindOption,
} from 'src/common/types/type';
import { FileEntity } from '../entities/file.entity';
import { CreateFileDto } from '../dto/create-file.dto';

export interface IFileService {
  find(option?: IFindOption): Promise<ResData<Array<FileEntity>>>;
  findOne(option: IFindOneOption): Promise<ResData<FileEntity>>;
  remove(id: ID): Promise<ResData<FileEntity>>;
  create(
    dto: CreateFileDto,
    currentUser?: ICurrentUser,
  ): Promise<ResData<FileEntity>>;
}
