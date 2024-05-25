import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from '../shared/shared.module';
import { config } from 'src/common/config';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: config.JWT_KEY,
      signOptions: { expiresIn: config.JWT_EXPIRES_IN },
    }),
    SharedModule,
  ],
  controllers: [AuthController],
  providers: [{ provide: 'IAuthService', useClass: AuthService }],
})
export class AuthModule {}
