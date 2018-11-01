import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient,
                private recipeService: RecipeService,
                private authService: AuthService) {}

    storeRecipes() {
        const token = this.authService.getToken();
        /*const headers = new HttpHeaders().set('Authorization', 'Bearer ckdfhskjhdfkjsdf');

        return this.httpClient.put('https://ng-recipe-boot-44ca4.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            observe: 'body',
            // headers: headers.
            params: new HttpParams().set('auth', token)
        });*/

        // With Custom HttpRequest With ProgressReport
        const req = new HttpRequest('PUT', 'https://ng-recipe-boot-44ca4.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
            reportProgress: true
        });
        return this.httpClient.request(req);
    }

    getRecipes() {
        const token = this.authService.getToken();
        return this.httpClient.get<Recipe[]>('https://ng-recipe-boot-44ca4.firebaseio.com/recipes.json', {
            observe: 'body',
            responseType: 'json',
            params: new HttpParams().set('auth', token)
        }).pipe(map((recipes) => {
                for (const recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }))
            .subscribe((recipes: Recipe[]) => {
                this.recipeService.setRecipes(recipes);
            });
    }
}
