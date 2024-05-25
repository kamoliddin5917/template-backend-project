import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ICurrentUser, IFindOneOption, IFindOption } from '../types/type';

export abstract class BaseRepository<CreateDto, Entity extends BaseEntity> {
  constructor(private readonly repository: Repository<Entity>) {}

  async create(dto: CreateDto, currentUser?: ICurrentUser): Promise<Entity> {
    const createData = this.repository.create();

    if (currentUser) {
      createData.createdBy = currentUser.id;
    }
    const newEntity = Object.assign(createData, dto);
    return await this.repository.save(newEntity);
  }

  async update(entity: Entity): Promise<Entity> {
    return await this.repository.save(entity);
  }

  async find(option?: IFindOption): Promise<Array<Entity>> {
    return await this.repository.find(option);
  }

  async findOne(option: IFindOneOption): Promise<Entity | null> {
    return await this.repository.findOne(option);
  }

  async remove(entity: Entity): Promise<Entity> {
    return await this.repository.remove(entity);
  }
}
