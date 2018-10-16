import { EventEmitter } from '@angular/core';

export class CounterService {
    moveActiveToInactive = new EventEmitter<number>();
    moveInActiveToActive = new EventEmitter<number>();
}
