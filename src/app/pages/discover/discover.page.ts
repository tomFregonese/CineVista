import { Component, OnInit } from '@angular/core';
import {DiscoverService} from '../../services/discover.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private service: DiscoverService) { }

  ngOnInit() {
    this.service.getTrendingAll().subscribe(response => {
      console.log(response);

      // Faites ce que vous voulez avec la réponse (par exemple, affectez-la à une variable dans votre composant)
    });
  }

}
