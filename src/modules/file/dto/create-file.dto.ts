export class CreateFileDto {
  url: string;
  mimetype: string;
  size: number;
  code: Nullable<string>;
}

export class CreateFileBodyDto {
  code: Nullable<string>;
}
