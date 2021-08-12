import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AccountService} from '../_services/account.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();

  model: any = {};

  constructor(
    private accountService: AccountService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      this.toastr.error(error.error);
    });
  }

  cancel() {
    console.log('canceled');
    this.cancelRegister.emit(false);
  }

}