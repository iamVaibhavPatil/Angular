import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberIncremented = new EventEmitter<number>();
  counter = 1;
  myInterval;

  constructor() { }

  ngOnInit() {
  }

  startGame() {
    this.myInterval = setInterval(() => {
      this.numberIncremented.emit(this.counter++);
    }, 1000);
  }

  endGame() {
    clearInterval(this.myInterval);
  }
}
