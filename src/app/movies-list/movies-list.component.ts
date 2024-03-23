import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../types/movies';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];
  movie: Movie[] = []
  isLoading: boolean = true;

  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.api.getMovies().subscribe((movies) => {
      this.movies = movies;
      setTimeout(() => {
        this.isLoading = false;
      });
    });
  }

  navigateToDetails(movieId: string): void {
    this.api.getMovieById(movieId).subscribe((movie) => {
    })
    this.router.navigate(['/movie', movieId]);
  }
}
