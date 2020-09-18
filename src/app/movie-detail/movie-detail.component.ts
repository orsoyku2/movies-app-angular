import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie;

  constructor(private movieService: MovieService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetail(id).subscribe(movie =>
      this.movie = movie);
  }
  updateFilm(): void {
    this.movieService.update(this.movie)
      .subscribe(() => {
        this.location.back();
      });

  }
}
