import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';

// import { AuthorityEntity, AuthorityService } from '../authority';
import { RoleEntity, RoleService } from './index';

// const pubSub = new PubSub();

@Resolver(of => RoleEntity)
export class RoleResolver {
  constructor(
    // private readonly authorityService: AuthorityService,
    private readonly roleService: RoleService
  ) {}

  @Query(returns => [RoleEntity])
  roles(): Promise<RoleEntity[]> {
    return this.roleService.find();
  }

}
