import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ID } from '../types/type';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: ID;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'last_updated_at',
    type: 'timestamp',
    nullable: false,
  })
  lastUpdatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    name: 'note',
    type: 'text',
    nullable: true,
  })
  note: Nullable<string>;

  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @Column({ name: 'is_deleted', type: 'boolean', default: false })
  isDeleted: boolean;

  @Column({ name: 'created_by', type: 'int', nullable: true })
  createdBy: Nullable<number>;

  @Column({ name: 'last_edited_by', type: 'int', nullable: true })
  lastUpdatedBy: Nullable<number>;

  @Column({ name: 'deleted_by', type: 'int', nullable: true })
  deletedBy: Nullable<number>;
}
