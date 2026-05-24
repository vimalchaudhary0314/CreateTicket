import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class Bookservice {

  private apiurl = 'api/books';

  constructor(private http: HttpClient) {}

  // GET METHOD
  getBooks(): Observable<Book[]> {

    return this.http.get<Book[]>(this.apiurl);
  }

  // POST METHOD
  createBook(book: Book): Observable<Book> {

    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<Book>(
      this.apiurl,
      book,
      { headers: httpHeader }
    );
  }

  // PUT METHOD
  updateBook(book: Book): Observable<Book> {

    const httpHeader = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.put<Book>(
      this.apiurl + '/' + book.id,
      book,
      { headers: httpHeader }
    );
  }

  DeleteBook(bookid:number):Observable<Book>{
    let httpHeader = new HttpHeaders()
    .set("Content-Type","application/json")
    return this.http.delete<Book>(this.apiurl+'/'+ bookid);
  }
}