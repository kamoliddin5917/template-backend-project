import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { IAuthService, ILoginData } from './interfaces/auth.service';
import { ResData } from '../../lib/resData';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/auth.dto';
import { IUserService } from '../user/interfaces/user.service';
import { BcryptEncryption } from 'src/lib/bcrypt';
import { PhoneOrPasswordWrongException } from './exception/auth.exception';

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
    private jwtService: JwtService,
  ) {}

  async login(dto: LoginUserDto): Promise<ResData<ILoginData>> {
    const { data: foundUser } = await this.userService.findOneByLogin(
      dto.login,
    );

    if (!foundUser) {
      throw new PhoneOrPasswordWrongException();
    }

    const isValid = await BcryptEncryption.compare(
      dto.password,
      foundUser.password,
    );

    if (!isValid) {
      throw new PhoneOrPasswordWrongException();
    }

    const token = await this.jwtService.signAsync({ id: foundUser.id });
    return new ResData<ILoginData>('success', HttpStatus.OK, {
      user: foundUser,
      token,
    });
  }
}
