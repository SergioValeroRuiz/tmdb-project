import { Component, OnInit, Input } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component'

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.sass']
})
export class MoviePopupComponent implements OnInit {

  @Input() movie: any;

  constructor(private moviesComponent: MoviesComponent) { }

  ngOnInit() {
  }

  closePopup(event){
    this.movie = null;
    this.moviesComponent.selectedMovie = null;
  }
}
