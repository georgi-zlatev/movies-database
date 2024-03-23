import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { AwardsListComponent } from './awards-list/awards-list.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MovieDetailsComponent } from './movies-list/movie-details/movie-details.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { AuthActivate } from './guards/auth.activate';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesListComponent, },
  { path: 'awards', component: AwardsListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent, canActivate: [AuthActivate] },
  { path: 'add', component: AddMovieComponent, canActivate: [AuthActivate] },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: ErrorComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
