import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') heading: ElementRef;
  @ContentChild('paragraphContent') paragraphContent: ElementRef;

  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content of heading :' + this.heading.nativeElement.textContent);
    console.log('Text Content of paragraph :' + this.paragraphContent.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text Content of paragraph :' + this.paragraphContent.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content of heading :' + this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }

}
