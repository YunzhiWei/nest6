import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';

import { RecipeResolver } from './index';

@Module({
  imports: [],
  controllers: [],
  providers: [
    RecipeResolver,
  ],
  exports: []
})
export class RecipeModule {}
