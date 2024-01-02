import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(private service: MoviesService) { }

  ngOnInit() {
    this.service.getTrendingMovies().subscribe(response => {
      console.log(response);

      // Faites ce que vous voulez avec la réponse (par exemple, affectez-la à une variable dans votre composant)
    });
  }

}
