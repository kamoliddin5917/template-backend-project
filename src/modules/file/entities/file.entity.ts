import { BaseEntity } from 'src/common/database/base.entity';
import { Column, Entity,  } from 'typeorm';

@Entity('files')
export class FileEntity extends BaseEntity {
  @Column({ name: 'url', type: 'text', nullable: false })
  url: string;

  @Column({
    name: 'code',
    type: 'varchar',
    length: 128,
    nullable: true,
  })
  code: Nullable<string>;

  @Column({ name: 'mimetype', type: 'varchar', length: 128, nullable: true })
  mimetype: Nullable<string>;

  @Column({ name: 'size', type: 'bigint', default: 0 })
  size: number;
}
