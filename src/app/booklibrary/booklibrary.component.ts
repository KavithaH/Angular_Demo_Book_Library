import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { BooklibraryService } from './booklibrary.service';
import { Resolve, ActivatedRouteSnapshot, Routes, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-booklibrary',
  templateUrl: './booklibrary.component.html',
  styleUrls: ['./booklibrary.component.scss']
})
export class BooklibraryComponent implements OnInit {
  books?: any[];
  flag?: boolean = false;
  constructor(protected bookService: BooklibraryService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.data.books) ;
    if(this.route.snapshot.data.books === null)
      this.flag = true;
    else{
        this.flag = false;
        this.bookService.getAllBooks().subscribe(
          (res: HttpResponse<any[]>) => this.onSuccess(res.body),
                  () => this.onError()
        );
      }
  }
  protected onSuccess(data: any | null): void {
    this.books = data || [];
  }
  protected onError(): void {
    
  }
}
