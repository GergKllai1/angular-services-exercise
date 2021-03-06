import { AccountService } from './../account.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) {}


  onSetTo(status: string) {
    this.accountService.onStatusChanged(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
