import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
    activeToInactiveCounter = 0;
    inActiveToActiveCounter = 0;

    constructor(private counterService: CounterService) {}

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.moveActiveToInactive.emit(++this.activeToInactiveCounter);
    }

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.moveInActiveToActive.emit(++this.inActiveToActiveCounter);
    }
}
