import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthorityEntity, AuthorityService, AuthorityController } from './authority';
import { RoleEntity, RoleService, RoleController, RolesResolver } from './role';

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
    RolesResolver,
  ],
  exports: [
    AuthorityService,
    RoleService,
  ]
})
export class CoreModule {}
