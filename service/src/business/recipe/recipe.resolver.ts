import { Resolver, Mutation, Query, Subscription, Args } from '@nestjs/graphql';
import * as _ from 'lodash';

import { Recipe, RecipesArgs, NewRecipeInput } from './index';

@Resolver(of => Recipe)
export class RecipeResolver // implements ResolverInterface<Recipe>  
{
    private recipeRepo: Recipe[] = [
        {id: '001', title: 'ONE', description: 'The first recipe!', ingredients: ['A', 'B'], createdWhen: new Date(), ratings: [{ value: 5, date: new Date() }, { value: 4, date: new Date() }] },
        {id: '002', title: 'TWO', description: 'The second recipe!',ingredients: ['B', 'C'], createdWhen: new Date(), ratings: [{ value: 4, date: new Date() }, { value: 3, date: new Date() }] },
    ];

    constructor(
        // private recipeService: RecipeService
    ) { }

    @Query(returns => Recipe)
    /**
    query {
        recipe(id: "001") { 
            id, title, averageRating
        }
    }
     */
    async recipe(@Args("id") id: string) {
        // const recipe = await this.recipeService.findById(id);
        const recipe = _.find(this.recipeRepo, { id: id });
        if (recipe === undefined) {
            // throw new RecipeNotFoundError(id);
            throw new Error(`Recipe #${id} no found!`);
        }
        return await recipe;
    }

    @Query(returns => [Recipe])
    /**
    query {
        recipes {
            id, 
            title, 
            description, 
            createdWhen, 
            ingredients,
            averageRating,
            ratings { ... }
        }
    }
     */
    async recipes(@Args() { skip, take }: RecipesArgs) {
        // return this.recipeService.findAll({ skip, take });
        return await this.recipeRepo;
    }

    @Mutation(returns => [Recipe])
    // @Authorized()
    /**
    mutation {
        addRecipe(newRecipe: {id:"007", title:"hello"}) { 
            id, title
        }
    }
     */
    async addRecipe(
        @Args("newRecipe") newRecipe: NewRecipeInput,
        // @Ctx("user") user: User,
    ) {
        // return this.recipeService.addNew({ data: newRecipe, user });
        this.recipeRepo.push(newRecipe);
        return await this.recipeRepo;
    }

    @Mutation(returns => Boolean)
    // @Authorized(Roles.Admin)
    /**
    mutation {
        removeRecipe(id:"008") 
    }
     */
    async removeRecipe(@Args("id") id: string) {
        try {
            // await this.recipeService.removeById(id);
            _.remove(this.recipeRepo, (item) => (item.id === id) );
            return await true;
        } catch {
            return await false;
        }
    }
}
