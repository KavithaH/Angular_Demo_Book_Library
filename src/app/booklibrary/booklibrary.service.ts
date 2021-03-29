import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SERVER_API_URL } from '../../app/app.constant';

type EntityArrayResponseType = HttpResponse<any[]>;
@Injectable({ providedIn: 'root' })

export class BooklibraryService {
  public resourceUrl = SERVER_API_URL + 'api/Values/ViewAllBooks';
  constructor(protected http: HttpClient) { }

  getAllBooks(): Observable<EntityArrayResponseType> {
    return this.http.get<any[]>(this.resourceUrl, { observe: 'response' });
  }
}
