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
  serverName = 'Test Server';
  isServerCreated = false;
  servers = ['Test Server', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowAddNewServer = true;
    }, 1500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.isServerCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is created. Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
