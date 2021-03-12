import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';

  constructor(private http: HttpClient, private router: Router){

  }

  loginButton() {
    if(this.password === this.password && this.username === this.username) {
      this.router.navigate(['/posts']);
    }
  }

  ngOnInit() {

  }

}
