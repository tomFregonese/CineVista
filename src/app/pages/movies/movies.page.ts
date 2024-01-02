import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private service: TmdbService) { }
  private list: any;

  ngOnInit() {
    this.service.getTrendingMovies().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }

}
