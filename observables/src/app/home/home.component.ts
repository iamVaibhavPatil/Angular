import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription, Observer } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  myNumberSubscription: Subscription;
  myCustomSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // Observable
    const myNumber = Observable.interval(1000);
    this.myNumberSubscription = myNumber.subscribe((number: number) => {
      console.log(number);
    });

    // Custom Observer
    const myObserver = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this does not work');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });
    this.myCustomSubscription = myObserver.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('Completed'); }
    );
  }

  ngOnDestroy(): void {
    this.myNumberSubscription.unsubscribe();
    this.myCustomSubscription.unsubscribe();
  }

}
