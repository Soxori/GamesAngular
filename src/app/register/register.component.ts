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
  username = '';
  password = '';
  users: User[] = [];

  constructor(private http: HttpClient, private router: Router){

  }
  createUser() {
    this.router.navigate(['/login']);
    this.http.post(this.url, {password: this.password, username: this.username, }).subscribe(
      (data: any) => {
        this.router.navigate(['/login']);
      }, (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
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
