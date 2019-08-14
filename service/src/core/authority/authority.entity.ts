import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@Entity('dbt_authorities')
export class AuthorityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  sys_app: string;

  @Column()
  authority: string;

  @Column()
  name: string;

  @Column()
  label: string;

}
