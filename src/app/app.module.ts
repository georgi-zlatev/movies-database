import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movies-list/movie-details/movie-details.component';
import { AwardsListComponent } from './awards-list/awards-list.component';
import { AwardDetailsComponent } from './award-details/award-details.component';
import { SharedModule } from './shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { UserModule } from './user/user.module';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    AwardsListComponent,
    AwardDetailsComponent,
    MoviesComponent,
    ErrorComponent,
    HomeComponent,
    AddMovieComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    UserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
