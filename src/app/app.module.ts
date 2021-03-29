import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklibraryComponent } from './booklibrary/booklibrary.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BookResolver } from './booklibrary/book.resolver';

@NgModule({
  declarations: [
    AppComponent,
    BooklibraryComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [BookResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
