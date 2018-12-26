import { AccountService } from './../account.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [],
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {
                this.accountService.statusUpdated.subscribe(
                  (status: string) => alert('New status ' + status)
                );
              }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName, accountStatus);
  }
}
