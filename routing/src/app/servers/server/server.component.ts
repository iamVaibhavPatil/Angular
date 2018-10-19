import { Component, OnInit, OnDestroy } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {

  server: {id: number, name: string, status: string};
  paramSubscription: Subscription;

  constructor(private serversService: ServersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(+this.activatedRoute.snapshot.params['id']);

    // Subscribe to route to listen for the param
    this.paramSubscription = this.activatedRoute.params.subscribe((params: Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });

  }

  ngOnDestroy(): void {
    this.paramSubscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' });
  }

}
