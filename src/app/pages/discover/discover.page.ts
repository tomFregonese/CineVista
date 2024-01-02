import { Component, OnInit } from '@angular/core';
import {DiscoverService} from '../../services/discover.service';
import {SeriesPage} from '../series/series.page';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private service: DiscoverService) { }
  protected list: any;

  ngOnInit() {
    this.service.getTrendingAll().subscribe(response => {
      console.log(response);
      this.list = response.results;
    });
  }

  protected readonly SeriesPage = SeriesPage;
}
