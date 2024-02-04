import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {InfiniteScrollCustomEvent} from '@ionic/angular';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private _tmdbService: TmdbService) { }
  protected movies!: any[];

  ngOnInit() {
    this._tmdbService.getDiscover('movie', 1).subscribe(response => {
      console.log(response);
      this.movies = response.results;
    });
  }

  pageCount = 1
  loadMoreMedias($event: InfiniteScrollCustomEvent) {
    this.pageCount ++
    this._tmdbService.getDiscover('movie', this.pageCount).subscribe(response => {
      console.log(response);
      this.movies = this.movies.concat(response.results);
      setTimeout(() => {
        ($event as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    });
  }

}
