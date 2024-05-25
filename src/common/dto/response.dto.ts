import { ResData } from 'src/lib/resData';

export class ResDataPagination<TData> extends ResData<TData> {
  count: number;

  constructor(
    message: string,
    statusCode: number,
    data: TData,
    count: number,
    error: Error | null = null,
  ) {
    super(message, statusCode, data, error);

    this.count = count;
  }
}
