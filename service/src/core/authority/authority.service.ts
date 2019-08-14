import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';

import { AuthorityEntity } from './index';

@Injectable()
export class AuthorityService extends TypeOrmCrudService<AuthorityEntity> {
  constructor(
    @InjectRepository(AuthorityEntity) authRepo,
  ) {
    super(authRepo)
  }
}
