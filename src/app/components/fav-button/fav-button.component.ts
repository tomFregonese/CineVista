import {Component, Input, OnInit} from '@angular/core';
import {FavoritesService} from '../../services/favorites.service';
import {Media} from '../../models/media.model';

@Component({
  selector: 'app-fav-button',
  templateUrl: './fav-button.component.html',
  styleUrls: ['./fav-button.component.scss'],
})
export class FavButtonComponent implements  OnInit{
  @Input() isFavorite: boolean = false;
  @Input() media!: Media;

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit(){
    this.isFavorite = (this.favoriteService.getFavorites()).some((favorite: any) => favorite.id === this.media.id);
  }

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;

    if (!this.isFavorite) {
      this.favoriteService.removeFavorite(this.media);
    } else {
      this.favoriteService.addFavorite(this.media)
    }
  }
}
