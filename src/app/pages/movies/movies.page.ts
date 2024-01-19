import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private service: TmdbService) { }
  protected movies!: any[];

  ngOnInit() {
    this.service.getDiscover('movie').subscribe(response => {
      console.log(response);
      this.movies = response.results;
    });
  }

}
