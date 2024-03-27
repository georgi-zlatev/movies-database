import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Movie } from 'src/app/types/movies';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | undefined;
  isLoading: boolean = true;
  showEditMode: boolean = false;


  constructor(private route: ActivatedRoute, private api: ApiService) {}

  ngOnInit(): void {
    const movieId = this.route.snapshot.paramMap.get('id'); // Get movie ID from route parameters
    if (movieId) {
      this.api.getMovieById(movieId).subscribe((movie) => {
        this.movie = movie; // Assign the fetched movie
        this.isLoading = false;
      });
    }
  }

  
}
