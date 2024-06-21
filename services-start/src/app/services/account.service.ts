import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    statusUpdated = new EventEmitter<string>();
    private loggingService:LoggingService;
      constructor(loggingService:LoggingService){
        this.loggingService = loggingService;
      }
    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status});
        this.loggingService.logStatusChange(status);
      }

    updateStatus(id:number,status:string){
        this.accounts[id].status = status;
        this.loggingService.logStatusChange(status);
      }
}