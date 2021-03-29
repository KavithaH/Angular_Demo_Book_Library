import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BooklibraryComponent } from './booklibrary/booklibrary.component';
import { HomeComponent } from './home/home.component';
import { BookResolver } from './booklibrary/book.resolver';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '' , redirectTo:'home' , pathMatch:'full'},
  { path: 'booklibrary/:id', component: BooklibraryComponent ,resolve: { books: BookResolver } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
