import { Component, OnInit } from '@angular/core';
import {SeriesPage} from '../series/series.page';
import {TmdbService} from '../../services/tmdb.service';
import {InfiniteScrollCustomEvent} from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  protected medias!: any[];

  constructor(private _tmdbService: TmdbService) { }

  ngOnInit() {
    this._tmdbService.getTrending('all').subscribe(response => {
      console.log(response);
      this.medias = response.results;
    });
  }

  loadMoreMedias($event: InfiniteScrollCustomEvent) {
    this._tmdbService.getTrending('all').subscribe(response => {
      console.log(response);
      this.medias = this.medias.concat(response.results);
      setTimeout(() => {
        ($event as InfiniteScrollCustomEvent).target.complete();
      }, 500);
    });
  }

  protected readonly SeriesPage = SeriesPage;
}

