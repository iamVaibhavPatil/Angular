import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test Recipe1', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg'),
        new Recipe('A test Recipe2', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg'),
        new Recipe('A test Recipe3', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg')
      ];

    getRecipes() {
        return this.recipes.slice();
    }

}
