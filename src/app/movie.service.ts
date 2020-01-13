import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  tmdbURL = 'https://api.themoviedb.org/3/discover/movie';
  tmdbKEY = '15d2ea6d0dc1d476efbca3eba2b9bbfb';

  getMovies() {
    return this.httpClient.get( this.tmdbURL + '?api_key=' + this.tmdbKEY);
  }

}
