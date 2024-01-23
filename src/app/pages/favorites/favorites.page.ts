import { Component } from '@angular/core';
import {FavoritesService} from '../../services/favorites.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage {

  constructor(protected favoritesService: FavoritesService) { }

}
