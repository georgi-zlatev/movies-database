import { Component } from '@angular/core';
import { Movie } from '../types/movies';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movies: Movie[] = []
  
  constructor(private api: ApiService){}
  
    ngOnInit(): void {
      this.api.getMovies().subscribe((movies) =>{
        console.log(movies);
        this.movies = movies
        
      }
      )
    }
}
