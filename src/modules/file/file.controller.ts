import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Inject,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  Res,
  UseGuards,
} from '@nestjs/common';
import { CreateFileBodyDto, CreateFileDto } from './dto/create-file.dto';
import { IFileService } from './interfaces/file.service';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FileTypeEnum } from 'src/common/enums/enum';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptionImagePublic } from 'src/lib/fileService';
import { FileRequiredException } from './exception/file.exception';
import { Response } from 'express';
import * as path from 'node:path';
import { JwtAuthGuard } from '../shared/guards/auth/jwt-auth.guard';

@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(
    @Inject('IFileService')
    private readonly fileService: IFileService,
  ) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('public/image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
          nullable: false,
        },
        code: {
          type: 'string',
          nullable: true,
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file', multerOptionImagePublic))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateFileBodyDto,
  ) {
    if (!file) {
      throw new FileRequiredException();
    }
    const createFileDto: CreateFileDto = {
      url: `api/file/${FileTypeEnum.PUBLIC}/${file.filename}`,
      code: dto.code,
      mimetype: file.mimetype,
      size: Number(file.size),
    };

    return await this.fileService.create(createFileDto);
  }

  @Get()
  findAll() {
    return this.fileService.find();
  }

  @Get('public/:fileName')
  findOnePublic(@Param('fileName') fileName: string, @Res() res: Response) {
    const fileDir: string = path.join(
      __dirname,
      '../../../uploads/public',
      fileName,
    );
    return res.sendFile(fileDir);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.findOne({ where: { id } });
  }

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.fileService.remove(id);
  }
}
