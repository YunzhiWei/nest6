import { ObjectType, InputType, ArgsType, Field, ID, Int } from 'type-graphql';

@InputType()
export class NewRecipeInput {
  @Field()
  id: string;

  @Field()
  // @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  // @Length(30, 255)
  description?: string;

  // @Field(type => [String])
  // // @MaxArraySize(30)
  // ingredients: string[];
}

@ArgsType()
export class RecipesArgs {
  @Field(type => Int)
  // @Min(0)
  skip: number = 0;

  @Field(type => Int)
  // @Min(1)
  // @Max(50)
  take: number = 25;

}

// @ObjectType()
// export class Rate {
//   @Field(type => Int)
//   value: number;

//   @Field()
//   date: Date;

//   user: User;
// }

@ObjectType({ description: "The recipe model" })
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field({ description: "The title of the recipe" })
  title: string;

  @Field({ nullable: true })
  description?: string;

//   @Field(type => [String])
//   ingredients: string[];

//   @Field()
//   creationDate: Date;

//   @Field(type => [Rate])
//   ratings: Rate[];

//   @Field({ nullable: true })
//   averageRating?: number;

}