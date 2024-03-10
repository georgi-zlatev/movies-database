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
import { AwardDetailsComponent } from './awards-list/award-details/award-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    AwardsListComponent,
    AwardDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
