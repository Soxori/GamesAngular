import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Games} from '../../Models/games';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  title = 'Game';

  games: Games[] = [];
  url = 'http://127.0.0.1:8080/Games/api/games';

  id = '';
  name = '';
  rating = '';

  constructor(private http: HttpClient, private router: Router) {
    this.ngOnInit();
  }


  addGame(): void {
    const body = {
      id: this.id,
      name: this.name,
      rating: this.rating,
    };
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.ngOnInit();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('detail/' + id);
  }

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      (data: Games[]) => {
        this.games = data;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

}
