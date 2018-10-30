import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCfylQiDAcc6K7yMa0Mird85T7KLiQnLBo',
      authDomain: 'ng-recipe-boot-44ca4.firebaseapp.com'
    });
  }
}
