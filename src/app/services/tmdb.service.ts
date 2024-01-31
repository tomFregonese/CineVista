import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  private tmdbBaseUrl = environment.TMDB_BASE_URL
  private apiKey = environment.API_KEY

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.apiKey}`
  });

  constructor(private httpClient: HttpClient) { }

  getTrending(trendingSearchType: 'all' | 'movie' | 'tv'): Observable<any> {
    const url = `${this.tmdbBaseUrl}/3/trending/${trendingSearchType}/day?language=fr-fr`;

    return this.httpClient.get(url, { headers: this.headers });
  }

  getDiscover(discoverSearchType: 'movie' | 'tv', pageNb: number): Observable<any> {
    const url = `${this.tmdbBaseUrl}/3/discover/${discoverSearchType}?language=fr-fr&page=${pageNb}`;

    return this.httpClient.get(url, { headers: this.headers });
  }

  getDetails(searchType: 'movie' | 'tv', id:number): Observable<any> {
    const url = `${this.tmdbBaseUrl}/3/${searchType}/${id}`;

    return this.httpClient.get(url, { headers: this.headers });
  }

  getSearchResults(searchType: 'multi' | 'movie' | 'tv'): Observable<any> {
    const url = `${this.tmdbBaseUrl}/3/search/${searchType}`;

    return this.httpClient.get(url, { headers: this.headers });
  }


}
