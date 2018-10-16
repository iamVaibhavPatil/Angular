import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeToInactiveCounter = 0;
  inActiveToActiveCounter = 0;

  constructor(private userService: UserService,
    private counterService: CounterService) {}

  ngOnInit(): void {

    this.counterService.moveActiveToInactive.subscribe(
      (counter: number) => this.activeToInactiveCounter = counter
    );

    this.counterService.moveInActiveToActive.subscribe(
      (counter: number) => this.inActiveToActiveCounter = counter
    );
  }

}
