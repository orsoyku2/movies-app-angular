import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import { MovieService } from '../services/movie.service';
import { LoggingService } from '../services/logging.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService: MovieService, private loggingService: LoggingService) { }
  title = 'Movie List';
  movies: Movie[];

  ngOnInit(): void {
    this.getMovies();
  }
  getMovies(): void{
    this.movieService.getMovie().
      subscribe(movies =>
        this.movies = movies);
  }
}
