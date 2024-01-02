import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(private service: TmdbService) { }
  public list: any;
  ngOnInit() {
    this.service.getTrendingSeries().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }
}
