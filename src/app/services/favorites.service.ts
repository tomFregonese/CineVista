import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'favorites';
  favorites: any[] = this.getFavorites();

  constructor(private storageService: StorageService) {}

  //async getFavorites(): Promise<any[]> {
  //  return JSON.parse(await this.storageService.get(this.favoritesKey) || '[]');
  //}

  //async addFavorite(media: any) {
  //    const favorites = await this.getFavorites();
  //    favorites.push(media);
  //    await this.storageService.set(this.favoritesKey, JSON.stringify(favorites));
  //}

  //async removeFavorite(media: any) {
  //  let favorites = await this.getFavorites();
  //  favorites = favorites.filter(favMedia => favMedia !== media);
  //  await this.storageService.set(this.favoritesKey, JSON.stringify(favorites));
  //}

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.favoritesKey) || '[]');
  }

  addFavorite(media: any) {
    const favorites = this.getFavorites();
    favorites.push(media);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.favorites = this.getFavorites();
  }

  removeFavorite(media: any) {
    let favorites = this.getFavorites();
    favorites = favorites.filter(favMedia => favMedia.id !== media.id);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    this.favorites = this.getFavorites();
  }
}
