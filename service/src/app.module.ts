import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';

import { CoreModule } from './core/core.module';
import { UserModule } from './business/user';
import { OrganizationModule } from './business/organization';

import { RecipeModule } from './business/recipe';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [

    // ORM
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: async (): Promise<TypeOrmModule> => ({
        "type": "postgres",
        "host": "127.0.0.1",
        "port": "5432",
        "database": "atlantis",
        "username": "atlantis",
        "password": "123456",
        "dropSchema": false,
        "synchronize": false,
        "logging": true,
        "entities": [ "./**/*.entity.ts" ]
      })
    }),

    // GraphQL
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),

    // API
    CoreModule,
    UserModule,
    OrganizationModule,

    RecipeModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
