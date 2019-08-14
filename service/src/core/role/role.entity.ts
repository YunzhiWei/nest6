import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity('dbt_roles')
export class RoleEntity {
  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column()
  sys_app: string;

  @Field({ nullable: true })
  @Column()
  authorities: string;

  @Field({ nullable: true })
  @Column()
  name: string;

  @Field({ nullable: true })
  @Column()
  label: string;

}
