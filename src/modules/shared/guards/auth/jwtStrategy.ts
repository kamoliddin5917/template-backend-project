import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Inject, Injectable } from '@nestjs/common';
import { config } from '../../../../common/config';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import { IUserService } from 'src/modules/user/interfaces/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.JWT_KEY,
    });
  }

  async validate(payload: { id: number }): Promise<UserEntity> {
    const { data: foundUser } = await this.userService.findOne({
      where: { id: payload.id },
    });

    return foundUser;
  }
}
