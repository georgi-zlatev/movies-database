import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../types/movies';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = []
  isLoading: boolean = true;

constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getMovies().subscribe((movies) =>{
      console.log(movies);
      this.movies = movies
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
    }
    )
  }
}
