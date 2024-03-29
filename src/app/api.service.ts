import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Movie } from './types/movies';
import { Award } from './types/awards';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getMovies() {
    const { apiUrl } = environment
    return this.http.get<Movie[]>(`${apiUrl}/movies.json`)
  }
  getAwards() {
    const { apiUrl } = environment
    return this.http.get<Award[]>(`${apiUrl}/awards.json`)
  }

  getMovieById(movieId: string): Observable<Movie> {
    const { apiUrl } = environment;
    return this.http.get<Movie>(`${apiUrl}/movies/${movieId}.json`);
  }
}
