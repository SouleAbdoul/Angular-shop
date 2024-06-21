import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  accounts:{name:string,status:string}[]=[];
  private accountService: AccountService; 
  
  constructor(accountService:AccountService){
    this.accountService = accountService;
  }
  ngOnInit(): void {
      this.accounts = this.accountService.accounts;
  }

}
//10.155.158.70
//L7WD2LCUSQL0001\LC_DEV