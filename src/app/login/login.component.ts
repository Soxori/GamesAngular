import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private url = 'api/user/login';
  errormassage = '';
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }

  loginButton(): void {
    this.http.post(this.url, {password: this.password, username: this.username, }).subscribe(
      (data: any) => {
        this.router.navigate(['/posts']);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 400) {
          this.errormassage = 'Něco máš špatně :)';
        }
      }
    );
  }

  ngOnInit(): void {

  }

}
