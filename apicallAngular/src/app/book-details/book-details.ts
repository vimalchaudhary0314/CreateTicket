import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { Book } from '../book';

import { Bookservice } from '../bookservice';

import { AppState } from '../state/app.state';

import { selectCount }
from '../state/counters/counter.selector';

@Component({
  selector: 'app-book-details',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './book-details.html',

  styleUrl: './book-details.css',
})
export class BookDetails implements OnInit {

  title = 'myapp';

  // GET
  AllBooks: Book[] = [];

  // POST
  booksaftersaved: Book[] = [];

  // PUT
  updatedBooks: Book[] = [];

  // DELETE
  deletedBooks: Book[] = [];

  // NgRx Counter
  count$: Observable<number>;

  constructor(

    private bookService: Bookservice,

    private store: Store<AppState>

  ) {

    // selector
    this.count$ =
    this.store.select(selectCount);

  }

  ngOnInit(): void {

    this.getAllBooks();

  }

  // GET METHOD
  getAllBooks() {

    this.bookService.getBooks().subscribe(

      (res: Book[]) => {

        this.AllBooks = res;

      },

      (err: HttpErrorResponse) => {

        console.log(err.message);

      }
    );
  }

  // POST METHOD
  insertBook() {

    const newBook: Book = {

      id: 106,
      name: 'Node JS',
      category: 'Backend Book',
      year: '2026'
    };

    this.saveBook(newBook);

  }

  saveBook(book: Book) {

    this.bookService.createBook(book).subscribe(

      (res: Book) => {

        console.log("Book Added Successfully");

        this.booksaftersaved.push(res);

        this.getAllBooks();

      },

      (err: HttpErrorResponse) => {

        console.log(err.message);

      }
    );
  }

  // PUT METHOD
  updateBook() {

    const changeBook: Book = {

      id: 104,
      name: 'React Native',
      category: 'React Native Book',
      year: '2020'
    };

    this.bookService.updateBook(changeBook).subscribe(

      (res: Book) => {

        console.log("Book Updated Successfully");

        this.updatedBooks = [res];

        this.getAllBooks();

      },

      (err: HttpErrorResponse) => {

        console.log(err.message);

      }
    );
  }

  // DELETE METHOD
  deleteBook() {

    const deleteId = 103;

    this.bookService.DeleteBook(deleteId).subscribe(

      () => {

        console.log("Book Deleted Successfully");

        this.AllBooks = this.AllBooks.filter(

          book => book.id !== deleteId

        );

        this.deletedBooks = [...this.AllBooks];

      },

      (err: HttpErrorResponse) => {

        console.log(err.message);

      }
    );
  }

}