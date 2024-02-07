import { Component, OnInit } from '@angular/core';
import {SeriesPage} from '../series/series.page';
import {TmdbService} from '../../services/tmdb.service';

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


  protected readonly SeriesPage = SeriesPage;
}

