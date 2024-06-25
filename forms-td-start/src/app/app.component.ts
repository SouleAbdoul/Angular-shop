import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultValue:string = 'teacher';
  answer:string = '';
  genders:string[] = ['male','female'];
  @ViewChild('f') form:NgForm;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  // OnNgSubmit(form:NgForm){
  //   console.log(form);
  // }
  OnNgSubmit(){
    console.log(this.form);
  }
}
