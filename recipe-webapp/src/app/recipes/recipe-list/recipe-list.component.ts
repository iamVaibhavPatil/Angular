import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test Recipe1', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg'),
    new Recipe('A test Recipe2', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg'),
    new Recipe('A test Recipe3', 'This is simply a test', 'https://images.media-allrecipes.com/userphotos/560x315/5565969.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(this.recipes.find(r => r.name === recipe.name));
  }

}
