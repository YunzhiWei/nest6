import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { OrganizationEntity } from '../organization';

@Entity('dbt_users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 500 })
  real_name: string;

  @Column({ length: 500 })
  nick_name: string;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  phonenumber: string;

   @Column({ type: 'jsonb' })
   ex_info: any;

   @ManyToOne(type => OrganizationEntity, employer => employer.employees)
   @JoinColumn({ name: 'employer_id' })
   employer: OrganizationEntity;
}
