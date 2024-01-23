export class Media {

  backdropPath: string;
  first_air_date: string;
  genre: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;

  constructor(backdropPath: string, first_air_date: string, genre: any,  id: number, name: string, origin_country: any, original_language: string, original_name: string,  overview: string, popularity: number, poster_path: string, vote_average: number, vote_count: number) {
    this.backdropPath = 'https://image.tmdb.org/t/p/w500' + backdropPath;
    this.first_air_date = first_air_date;
    this.genre = genre;
    this.id = id;
    this.name = name;
    this.origin_country = origin_country;
    this.original_language = original_language;
    this.original_name = original_name;
    this.overview = overview;
    this.popularity = popularity;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.vote_count = vote_count;
  }
}
