import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private movieServie: MovieService) { }

  ngOnInit(): void {
    this.movieServie.getMovie().subscribe(movie => {
      this.movies = movie.slice(0, 4);
    });

  }

}
