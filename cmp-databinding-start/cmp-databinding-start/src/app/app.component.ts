import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  serverElements = [{type:'server',name:'TestServer',content:'Just a test!'}];
  constructor(){

  }
  ngOnInit(): void {
      
  }
  
  onServerAdded(serverData:{serverName:string,serverContent:string}) {

    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content:serverData.serverContent
    });
    console.log(this.serverElements);
    
  }

  onBlueprintAdded(blueprintData:{blueprintName:string,blueprintContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });

    console.log(this.serverElements);
  }
}
