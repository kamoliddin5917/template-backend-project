import { CreateUserDto } from '../dto/create-user.dto';
import { UserEntity } from '../entities/user.entity';
import { BaseRepository } from 'src/common/database/base.repository';

export interface IUserRepository
  extends BaseRepository<CreateUserDto, UserEntity> {}
