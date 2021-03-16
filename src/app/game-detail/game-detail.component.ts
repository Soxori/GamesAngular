import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Games} from '../Models/games';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  private url = 'api/games/';
  game: Games;
  name = '';
  rating = '';
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  editGame(): void {
    this.http.put(this.url, {name: this.name, rating: this.rating}).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(p => {
      const id = p.get('id');
      this.http.get(this.url + id).subscribe(
        (data: Games) => {
          this.game = data;
        }, (error) => {
          console.log(error);
        });
    });
  }

}
