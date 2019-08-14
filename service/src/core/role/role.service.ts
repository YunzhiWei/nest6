import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { RoleEntity } from './index';

@Injectable()
export class RoleService extends TypeOrmCrudService<RoleEntity> {
  constructor(
    @InjectRepository(RoleEntity) roleRepo,
  ) {
    super(roleRepo);
  }
}
