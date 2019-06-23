import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ButtonbarComponent } from './buttonbar/buttonbar.component';
import { ReviewsService } from './reviews.service';


// @NgModule converts TS class to an Angular module
@NgModule({
  declarations: [
    AppComponent, 
    ReviewsComponent, 
    ButtonbarComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ReviewsService, 
    ReviewsComponent,
    ButtonbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
