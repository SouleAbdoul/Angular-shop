import { Component, Input} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent {
  private loggingServices?:LoggingService;
  private accountServices?:AccountService;
  constructor(loggingService:LoggingService,accountService:AccountService){
    this.loggingServices = loggingService;
    this.accountServices = accountService;
  }
  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id,status);
    this.accountServices.statusUpdated.emit(status);
    // this.loggingServices.logStatusChange(status);
  }
}
