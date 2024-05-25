import { Logger } from '@nestjs/common';
import { existsSync, mkdirSync } from 'fs';
import { diskStorage } from 'multer';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';
import { unlink } from 'fs';
import { FileTypeEnum } from 'src/common/enums/enum';
import { FileTypeMustBeImageException } from 'src/modules/file/exception/file.exception';

export const multerConfig = { dest: 'uploads' };

const privateDestination = (req: any, file: any, cb: any) => {
  const fileStaticPath = multerConfig.dest;
  const uploadPath = `${fileStaticPath}/${FileTypeEnum.PRIVATE}`;

  if (!existsSync(fileStaticPath)) {
    mkdirSync(fileStaticPath);
  }
  if (!existsSync(uploadPath)) {
    mkdirSync(uploadPath);
  }
  cb(null, uploadPath);
};

const publicDestination = (req: any, file: any, cb: any) => {
  const fileStaticPath = multerConfig.dest;
  const uploadPath = `${fileStaticPath}/${FileTypeEnum.PUBLIC}`;

  if (!existsSync(fileStaticPath)) {
    mkdirSync(fileStaticPath);
  }
  if (!existsSync(uploadPath)) {
    mkdirSync(uploadPath);
  }
  cb(null, uploadPath);
};

const publicStorage = diskStorage({
  destination: publicDestination,
  filename: (req: any, file: any, cb: any): void => {
    cb(
      null,
      `${file.mimetype.split('/')[0]}__${uuidv4()}.${
        file.mimetype.split('/')[1]
      }`,
    );
  },
});

const privateStorage = diskStorage({
  destination: privateDestination,
  filename: (req: any, file: any, cb: any): void => {
    cb(
      null,
      `${file.mimetype.split('/')[0]}__${uuidv4()}.${
        file.mimetype.split('/')[1]
      }`,
    );
  },
});

const fileFilters = {
  image: (req: any, file: any, cb: any) => {
    if (file.mimetype.split('/')[0] === 'image') {
      cb(null, true);
    } else {
      cb(new FileTypeMustBeImageException(), false);
    }
  },
  all: (req: any, file: any, cb: any) => {
    cb(null, true);
  },
};

export const multerOptionImagePrivate = {
  fileFilter: fileFilters.image,
  storage: privateStorage,
  limits: { fileSize: 40 * 1024 * 1024 },
};

export const multerOptionImagePublic = {
  fileFilter: fileFilters.image,
  storage: publicStorage,
  limits: { fileSize: 40 * 1024 * 1024 },
};

export const multerOptionAllPublic = {
  fileFilter: fileFilters.all,
  storage: publicStorage,
  limits: { fileSize: 40 * 1024 * 1024 },
};

export const deleteFile = (file: Array<string> | string) => {
  if (file === null) {
    return;
  } else if (typeof file === 'object') {
    file.forEach((element: string) => {
      unlink(join(__dirname, '../../uploads', element), (error) => {
        if (error) {
          Logger.error({
            message: error.message || 'file upload error',
            status: error['status'] || 500,
            user: 'none',
            stack: error,
            context: `File upload  catch`,
          });
        }
      });
    });
  } else {
    unlink(join(__dirname, '../../uploads', file), (error) => {
      if (error) {
        Logger.error({
          message: error.message || 'file upload error',
          status: error['status'] || 500,
          user: 'none',
          stack: error,
          context: `File upload  catch`,
        });
      }
    });
  }
};
