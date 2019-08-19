import { ObjectType, InputType, ArgsType, Field, ID, Int, Float } from 'type-graphql';
import { Min, Max, MaxLength, Length } from "class-validator";

@ObjectType()
export class Rate {
  @Field(type => Int)
  value: number;

  @Field()
  date: Date;

  // user: User;
}

@ObjectType({ description: "The recipe model" })
export class Recipe {
  @Field(type => ID)
  id: string;

  @Field({ description: "The title of the recipe" })
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => [String])
  ingredients: string[];

  @Field()
  createdWhen: Date;

  @Field(type => [Rate])
  ratings: Rate[];

  @Field(type => Float, { nullable: true })
  averageRating?( /* @Args("since") sinceDate?: Date */): number | null {
    const ratings = // !sinceDate ? 
      this.ratings // : this.ratings.filter(rate => rate.date > sinceDate)
    ;
    if (!ratings.length) return null;

    const sumvalue = ratings.reduce((sum, rate) => sum + rate.value, 0);
    return sumvalue / ratings.length;
  }

}

@InputType()
export class NewRecipeInput extends Recipe
{
  @Field()
  @MaxLength(30)
  title: string;

  @Field({ nullable: true })
  @Length(30, 255)
  description?: string;

  @Field(type => [String])
  // @MaxArraySize(30)
  ingredients: string[];
}

@ArgsType()
export class RecipesArgs {
  @Field(type => Int)
  @Min(0)
  skip: number = 0;

  @Field(type => Int)
  @Min(1)
  @Max(50)
  take: number = 25;

}
