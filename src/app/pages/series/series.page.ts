import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {InfiniteScrollCustomEvent} from '@ionic/angular';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(private _tmdbService: TmdbService) { }
  public series!: any[];
  ngOnInit() {
    this._tmdbService.getDiscover('tv', 1).subscribe(response => {
      console.log(response);
      this.series = response.results;
    });
  }

  pageCount = 1
  loadMoreMedias($event: InfiniteScrollCustomEvent) {
    this.pageCount ++
    this._tmdbService.getDiscover('tv', this.pageCount).subscribe(response => {
      console.log(response);
      this.series = this.series.concat(response.results);
      setTimeout(() => {
        ($event as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    });
  }

}
