import { Component, OnInit } from '@angular/core';

import{ MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  private movies = [];
  public selectedMovie: any;
  private searchParameters: string;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe((res : any[])=>{
      this.movies = res['results'];
    }); 
  }

  searchMovies(): void{
    if(this.searchParameters.length > 0){
      this.movieService.searchMovies(this.searchParameters).subscribe((resul : any[])=>{
        this.movies = resul['results'];
      }); 
    } else {
      this.getMovies();
    }
  }

  selectMovie(movie: any){
    this.selectedMovie = movie;
  }

}
