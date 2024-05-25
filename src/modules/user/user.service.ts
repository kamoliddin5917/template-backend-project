import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from 'src/common/database/base.service';
import { IUserService } from './interfaces/user.service';
import { UserEntity } from './entities/user.entity';
import { IUserRepository } from './interfaces/user.repository';
import { ResData } from 'src/lib/resData';

@Injectable()
export class UserService
  extends BaseService<CreateUserDto, UpdateUserDto, UserEntity>
  implements IUserService
{
  constructor(
    @Inject('IUserRepository') private readonly userRepository: IUserRepository,
  ) {
    super(userRepository, 'user');
  }

  async findOneByLogin(login: string): Promise<ResData<UserEntity | null>> {
    const foundData = await this.userRepository.findOne({ where: { login } });

    const resData = new ResData<UserEntity>('found', 200, foundData);

    if (!foundData) {
      resData.message = 'user not found by login';
      resData.statusCode = 404;
    }

    return resData;
  }
}
