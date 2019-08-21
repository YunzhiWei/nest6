import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorityEntity, AuthorityService, AuthorityController, AuthorityResolver } from './authority';
import { RoleEntity, RoleService, RoleController, RoleResolver } from './role';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      AuthorityEntity,
      RoleEntity,
    ])
  ],
  controllers: [
    AuthorityController,
    RoleController,
  ],
  providers: [
    AuthorityService,
    RoleService,
    AuthorityResolver,
    RoleResolver,
  ],
  exports: [
    AuthorityService,
    RoleService,
  ]
})
export class CoreModule {}
