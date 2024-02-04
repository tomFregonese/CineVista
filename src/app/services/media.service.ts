import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TmdbService } from './tmdb.service';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  private medias = new BehaviorSubject<any[]>([]);
  medias$ = this.medias.asObservable();

  constructor(private tmdbService: TmdbService) {}

  loadMoreMedias() {
    this.tmdbService.getTrending('all').subscribe(response => {
      const currentMedias = this.medias.getValue();
      this.medias.next([...currentMedias, ...response.results]);
    });
  }
}