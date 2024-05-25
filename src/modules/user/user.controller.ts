import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { IUserService } from './interfaces/user.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginAlreadyUsedException } from './exception/user.exception';
import { RolesGuard } from '../shared/guards/role.guard';
import { JwtAuthGuard } from '../shared/guards/auth/jwt-auth.guard';
import { CurrentUser } from 'src/common/decorator/user.decorator';
import { ICurrentUser } from 'src/common/types/type';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(
    @Inject('IUserService') private readonly userService: IUserService,
  ) {}

  // @ApiBearerAuth()
  // @UseGuards(JwtAuthGuard, RolesGuard)
  // @RoleDecorator(RoleEnum.SUPER_ADMIN)
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if (createUserDto.login) {
      const { data: getByLogin } = await this.userService.findOneByLogin(
        createUserDto.login,
      );

      if (getByLogin) {
        throw new LoginAlreadyUsedException();
      }
    }

    return await this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.find();
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get('me')
  getMe(@CurrentUser() currentUser: ICurrentUser) {
    return this.userService.findOne({ where: { id: currentUser.id } });
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne({ where: { id } });
  }
}
