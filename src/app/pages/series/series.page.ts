import { Component, OnInit } from '@angular/core';
import {SeriesService} from '../../services/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.page.html',
  styleUrls: ['./series.page.scss'],
})
export class SeriesPage implements OnInit {

  constructor(private service: SeriesService) { }

  ngOnInit() {
    this.service.getTrendingSeries().subscribe(response => {
      console.log(response);

      // Faites ce que vous voulez avec la réponse (par exemple, affectez-la à une variable dans votre composant)
    });
  }
}
