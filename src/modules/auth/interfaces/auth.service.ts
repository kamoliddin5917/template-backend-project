import { UserEntity } from 'src/modules/user/entities/user.entity';
import { LoginUserDto } from '../dto/auth.dto';
import { ResData } from 'src/lib/resData';

export interface ILoginData {
  user?: UserEntity;
  token: string;
}

export interface IAuthService {
  login(dto: LoginUserDto): Promise<ResData<ILoginData>>;
}
