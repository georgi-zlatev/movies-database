import { Component } from '@angular/core';
import { Movie } from '../types/movies';
import { ApiService } from '../api.service';
import { Award } from '../types/awards';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  movies: Movie[] = []
  awards: Award[] = []

  constructor(private api: ApiService){}
  
    ngOnInit(): void {
      this.api.getMovies().subscribe((movies) =>{
        this.movies = movies
        
      }
      )
      this.api.getAwards().subscribe((awards) =>{
        this.awards = awards
        
      }
      )
    }
}
