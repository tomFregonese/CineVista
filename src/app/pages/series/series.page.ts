import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {
  static openModal(id: number) {
    throw new Error('Method not implemented.');
  }
  static openSeriesPage(id: number) {
    throw new Error('Method not implemented.');
  }

  constructor(private service: TmdbService) { }
  public list: any;
  ngOnInit() {
    this.service.getTrendingSeries().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }
}
