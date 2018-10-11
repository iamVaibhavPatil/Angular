import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

  username: string = '';

  constructor() { }

  ngOnInit() {
  }

  checkIfUsernameNonEmpty() {
    return this.username === '' ? true : false;
  }

  resetUsername() {
    this.username = '';
  }
}
