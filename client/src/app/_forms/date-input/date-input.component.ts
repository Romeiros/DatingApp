import {Component, Input, OnInit, Self} from '@angular/core';
import {ControlValueAccessor, NgControl} from '@angular/forms';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.scss']
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() label: string;
  @Input() maxDate: Date;

  bsConfig?: Partial<BsDatepickerConfig>;

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD MMMM YYYY'
    };
  }

  writeValue(value: any): void {

  }

  registerOnChange(fn: (value: any) => void): void {

  }

  registerOnTouched(fn: () => void): void {

  }

  setDisabledState(isDisabled: boolean): void {

  }

}
