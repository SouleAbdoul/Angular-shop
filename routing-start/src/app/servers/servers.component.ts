import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private router:Router;
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private route:ActivatedRoute,
    router:Router
  )
   { 
    this.router = router;
   }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onReload():void{
    this.router.navigate(['servers'],{relativeTo:this.route})
  }
}
