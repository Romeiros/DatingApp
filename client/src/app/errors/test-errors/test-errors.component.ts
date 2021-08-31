import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.scss']
})
export class TestErrorsComponent implements OnInit {

  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  get404Error() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
    }, error => {
      this.validationErrors = error;
      console.log(error);
    });
  }

  get500Error() {
    this.http.get(this.baseUrl + 'buggy/server-error', ).subscribe(response => {
    }, error => {
      this.validationErrors = error;
      console.log(error);
    });
  }

}
