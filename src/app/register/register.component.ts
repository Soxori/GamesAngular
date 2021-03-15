import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {User} from '../Models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private url = '/api/user';
  errormassage = '';
  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }
  createUser(): void {
    this.http.post(this.url + '/register', {password: this.password, username: this.username, }).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
        console.log(data);
      }, (error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 400) {
        this.errormassage = 'Tento username je zabrany';
        }
      }
    );
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
