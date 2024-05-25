import { ResData } from 'src/lib/resData';
import { UserEntity } from '../entities/user.entity';
import {
  ICurrentUser,
  ID,
  IFindOneOption,
  IFindOption,
} from 'src/common/types/type';
import { CreateUserDto } from '../dto/create-user.dto';

export interface IUserService {
  find(option?: IFindOption): Promise<ResData<Array<UserEntity>>>;
  findOne(option: IFindOneOption): Promise<ResData<UserEntity>>;
  remove(id: ID): Promise<ResData<UserEntity>>;
  create(
    dto: CreateUserDto,
    currentUser?: ICurrentUser,
  ): Promise<ResData<UserEntity>>;
  findOneByLogin(login: string): Promise<ResData<UserEntity | null>>;
}
