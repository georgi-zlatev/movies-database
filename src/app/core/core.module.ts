import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MiniNavBarComponent } from './mini-nav-bar/mini-nav-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MiniNavBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MiniNavBarComponent,
  ]
})
export class CoreModule { }
