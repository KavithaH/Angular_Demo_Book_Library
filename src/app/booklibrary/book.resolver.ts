import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BooklibraryService } from './booklibrary.service';
import { Resolve, ActivatedRouteSnapshot, Routes, Router } from '@angular/router';

@Injectable()
export class BookResolver implements Resolve<Observable<any>> {
    
  constructor(protected bookService: BooklibraryService,private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.params['id'];
    console.log("============id:  "+id);
    if(id === 'India')
        return this.bookService.getAllBooks();

        return null;
  }
}