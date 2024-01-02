import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(private service: SeriesService) { }
  public list: any;
  ngOnInit() {
    this.service.getTrendingSeries().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }
}
