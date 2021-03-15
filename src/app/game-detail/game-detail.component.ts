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
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

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
