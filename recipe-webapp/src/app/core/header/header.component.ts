import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { Response } from '@angular/http';
import { RecipeService } from '../../recipes/recipe.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService,
              private router: Router) { }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe((response: Response) => {
      console.log(response);
    });
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogOut() {
    this.authService.logout();
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  ngOnInit() {
  }

}
