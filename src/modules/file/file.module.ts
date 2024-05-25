import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileEntity } from './entities/file.entity';
import { SharedModule } from '../shared/shared.module';
import { FileRepository } from './file.repository';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity]), SharedModule],
  controllers: [FileController],
  providers: [
    { provide: 'IFileService', useClass: FileService },
    {
      provide: 'IFileRepository',
      useClass: FileRepository,
    },
  ],
})
export class FileModule {}
