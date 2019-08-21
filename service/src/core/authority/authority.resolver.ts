import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
// import { PubSub } from 'apollo-server-express';

import { AuthorityEntity, AuthorityService } from './index';

// const pubSub = new PubSub();

@Resolver(of => AuthorityEntity)
export class AuthorityResolver {
  constructor(private readonly authorityService: AuthorityService) {}

  @Query(returns => [AuthorityEntity])
  authorities(): Promise<AuthorityEntity[]> {
    return this.authorityService.find();
  }

}
