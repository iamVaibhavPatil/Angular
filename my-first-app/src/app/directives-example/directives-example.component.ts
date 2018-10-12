import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-example',
  templateUrl: './directives-example.component.html',
  styles: [`
    .white-text {
      color: white
    }
  `]
})
export class DirectivesExampleComponent implements OnInit {

  displaySecret = false;
  logs = [];

  constructor() { }

  ngOnInit() {
  }

  toggleSecret() {
    this.displaySecret = !this.displaySecret;
    this.logs.push(new Date());
  }
}
