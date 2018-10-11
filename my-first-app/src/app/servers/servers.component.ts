import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // -- tag selector
  // selector: '[app-servers]' -- attribute Selector
  // selector: '.app-servers' -- class Selector
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowAddNewServer = false;
  serverCreationStatus = 'No Server was Created';
  serverName: string;


  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 1500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
