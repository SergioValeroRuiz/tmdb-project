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

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void{
    this.movieService.getMovies().subscribe((res : any[])=>{
      console.log(res);
      this.movies = res['results'];
    }); 
  }

  selectMovie(movie: any){
    this.selectedMovie = movie;
  }

}
