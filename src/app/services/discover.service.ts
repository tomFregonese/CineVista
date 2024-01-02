import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TMDB_BASE_URL, API_KEY } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  private tmdbBaseUrl = TMDB_BASE_URL
  private apiKey = API_KEY

  constructor(private httpClient: HttpClient) { }

  getTrendingAll(): Observable<any> {
    const url = `${this.tmdbBaseUrl}/trending/all/day?language=en-US`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.httpClient.get(url, { headers });
  }
}
