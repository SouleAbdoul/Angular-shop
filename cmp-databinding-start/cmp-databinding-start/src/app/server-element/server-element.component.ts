import {
   Component,
    Input,
    OnChanges, 
    OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges {
 @Input('srvElement') element:{type:string,name:string,content:string};

  constructor()
  {
    console.log("constructor logged");
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnchange is called");
      console.log(changes);
      
      
  }

  ngOnInit(): void {
     console.log("ngOnInit called");
      
  }
  ngDoCheck(){
    console.log("ngDocheck called!");
  }
  ngAfterContentInit(){
    console.log("ngContent init called");
  }
  ngAfterContentChecked(){
    console.log("ng after content checked is called");
  }
  ngOnDestroy(){
    console.log("ng on destroy is called");
  }
}
