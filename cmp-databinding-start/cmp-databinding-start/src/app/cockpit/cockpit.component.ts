import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit{
  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName:string,blueprintContent:string}>();
  //newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput',{static:true}) serverContentInput;
 
  constructor(){}
  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement) {
  this.serverCreated.emit(
    {serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
      // ,serverContent:this.newServerContent

    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        blueprintName:nameInput.value,
       blueprintContent:this.serverContentInput.nativeElement.value
      });
  }
}
