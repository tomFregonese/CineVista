import { Component, OnInit } from '@angular/core';
import {SeriesPage} from '../series/series.page';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private service: TmdbService) { }
  protected list: any;

  ngOnInit() {
    this.service.getTrendingAll().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }

  




  protected readonly SeriesPage = SeriesPage;
}

