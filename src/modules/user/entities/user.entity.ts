import { BaseEntity } from 'src/common/database/base.entity';
import { RoleEnum } from 'src/common/enums/enum';
import { BcryptEncryption } from 'src/lib/bcrypt';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({
    name: 'login',
    type: 'varchar',
    length: 128,
    unique: true,
    nullable: true,
  })
  login: string;

  @Column({ name: 'password', type: 'text', nullable: true })
  password: string;

  @Column({ name: 'firstname', type: 'varchar', length: 256, nullable: true })
  firstname: Nullable<string>;

  @Column({ name: 'lastname', type: 'varchar', length: 256, nullable: true })
  lastname: Nullable<string>;

  @Column({ name: 'middlename', type: 'varchar', length: 256, nullable: true })
  middlename: Nullable<string>;

  @Column({
    name: 'jshshir',
    type: 'varchar',
    length: 128,
    unique: true,
    nullable: true,
  })
  jshshir: string;

  @Column({ name: 'avatar', type: 'text', nullable: true })
  avatar: string;

  @Column({ name: 'roles', type: 'text', array: true, default: '{}' })
  roles: Array<RoleEnum>;

  @Column({
    name: 'one_id_login',
    type: 'varchar',
    length: 128,
    unique: true,
    nullable: true,
  })
  oneIdLogin: string;

  @Column({ name: 'is_verified', type: 'boolean', default: false })
  isVerified: boolean;

  @BeforeInsert()
  @BeforeUpdate()
  async passwordHashed() {
    if (!!this.password) {
      this.password = await BcryptEncryption.encrypt(this.password);
    }
  }
}
