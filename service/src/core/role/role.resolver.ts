import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';

import { RoleEntity, RoleService } from './index';

// const pubSub = new PubSub();

@Resolver(of => RoleEntity)
export class RolesResolver {
  constructor(private readonly roleService: RoleService) {}

  @Query(returns => [RoleEntity])
  roles(): Promise<RoleEntity[]> {
    return this.roleService.find();
  }

}
