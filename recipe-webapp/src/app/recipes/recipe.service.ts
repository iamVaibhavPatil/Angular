import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Burger',
            'Chicken Burger is yummy',
            'http://robertsboxedmeats.ca/wp-content/uploads/2015/01/120518_CrispyChickenBurger_hr.jpg',
            [
                new Ingredient('Chick Meat', 1),
                new Ingredient('Tommatoes', 1),
                new Ingredient('French Fries', 20)
            ]),
            new Recipe(
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

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}
