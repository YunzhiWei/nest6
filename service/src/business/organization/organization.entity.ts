import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { UserEntity } from '../user';

@Entity('dbt_organizations')
export class OrganizationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  abbreviation: string;

  @Column({ length: 500 })
  alias: string;

  @Column({ length: 500 })
  address: string;

  @Column()
  tree_path: string;

  @Column({ type: 'jsonb' })
  ex_info: any;

  @OneToMany(type => UserEntity, user => user.employer)
  employees: UserEntity[];

}
