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
  title = 'PostList';

  games: Games[] = [];
  url = '/api/games/';
  name = '';
  rating = '';

  constructor(private http: HttpClient, private router: Router) {

  }


  addGame(): void {
    const body = {
      name: this.name,
      rating: this.rating,
    };
    this.http.post(this.url, body, {observe: 'response'}).subscribe(
      (data) => {
        console.log(data);
        this.updateList();
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
  checkGame(id: number): void {
    this.router.navigateByUrl('game/' + id);
  }
  deleteGame(id: number): void {
    this.http.delete(this.url + id).subscribe(
      (data) => {
        console.log(data);
        this.updateList();
      },
      (error) => {
        console.log(error);
      }
    );
  }
  ngOnInit(): void {
    this.updateList();
  }
  updateList(): void {
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
