import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // -- tag selector
  // selector: '[app-servers]' -- attribute Selector
  // selector: '.app-servers' -- class Selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
