import { BaseEntity } from './base.entity';
import { BaseRepository } from './base.repository';
import { ResData } from 'src/lib/resData';
import { BaseNotFoundHttpException } from '../exceptions/base.exception';
import { ICurrentUser, ID, IFindOneOption, IFindOption } from '../types/type';

export abstract class BaseService<
  CreateDto,
  UpdateDto,
  Entity extends BaseEntity,
> {
  constructor(
    private readonly repository: BaseRepository<CreateDto, Entity>,
    private readonly entityName: string,
  ) {}

  async create(
    dto: CreateDto,
    currentUser?: ICurrentUser,
  ): Promise<ResData<Entity>> {
    const data = await this.repository.create(dto, currentUser);

    return new ResData<Entity>('created', 201, data);
  }

  async update(
    id: ID,
    dto: UpdateDto,
    currentUser?: ICurrentUser,
  ): Promise<ResData<Entity>> {
    const { data: foundDataById } = await this.findOne({ where: { id } });

    delete dto['id'];
    delete dto['isDeleted'];
    delete dto['lastEditedAt'];
    delete dto['lastEditedBy'];
    delete dto['createdAt'];
    delete dto['createdBy'];
    delete dto['deletedAt'];
    delete dto['deletedBy'];

    for (const key in dto) {
      const value = dto[key];

      if (Array.isArray(value)) {
        delete dto[key];
      }
    }

    const updatedData = Object.assign(foundDataById, dto, {
      lastEditedAt: new Date(),
    });

    if (currentUser) {
      updatedData.lastUpdatedBy = currentUser.id;
    }

    if (!dto['password']) {
      delete updatedData['password'];
    }

    const data = await this.repository.update(updatedData);

    return new ResData<Entity>('update', 200, data);
  }

  async find(option?: IFindOption): Promise<ResData<Array<Entity>>> {
    const data = await this.repository.find(option);

    if (!data.length) {
      throw new BaseNotFoundHttpException(this.entityName);
    }

    return new ResData<Array<Entity>>('found', 200, data);
  }

  async findOne(option: IFindOneOption): Promise<ResData<Entity>> {
    const data = await this.repository.findOne(option);

    if (!data) {
      throw new BaseNotFoundHttpException(this.entityName);
    }

    return new ResData<Entity>('found', 200, data);
  }

  async remove(id: number): Promise<ResData<Entity>> {
    const { data: foundDataById } = await this.findOne({ where: { id } });

    const data = await this.repository.remove(foundDataById);

    return new ResData<Entity>('removed', 200, data);
  }
}
