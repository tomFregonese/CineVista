import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private tmdbBaseUrl = environment.TMDB_BASE_URL
  private apiKey = environment.API_KEY

  constructor(private httpClient: HttpClient) { }

  getTrendingSeries(): Observable<any> {
    const url = `${this.tmdbBaseUrl}/trending/tv/day?language=en-US`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    return this.httpClient.get(url, { headers });
  }
}
