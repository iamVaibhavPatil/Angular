import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
                1,
                'Chicken Burger',
                'Chicken Burger is yummy',
                'http://robertsboxedmeats.ca/wp-content/uploads/2015/01/120518_CrispyChickenBurger_hr.jpg',
                [
                    new Ingredient('Chick Meat', 1),
                    new Ingredient('Tommatoes', 1),
                    new Ingredient('French Fries', 20)
                ]),
            new Recipe(
                2,
                'Italian Pizza',
                'Italian Pizza is tasty',
                'https://cdn.yemek.com/mncrop/940/625/uploads/2016/08/makarna-tabanli-pizza.jpg',
                [
                    new Ingredient('Capsicum', 3),
                    new Ingredient('Onion', 1),
                    new Ingredient('Cheese', 2)
            ])
        ];

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        const recipe = this.recipes.find((r) => {
            return r.id === id;
        });
        return recipe;
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
