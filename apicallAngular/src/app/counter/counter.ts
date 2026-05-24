import { Component } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { AsyncPipe } from '@angular/common';
import { AppState } from '../state/app.state';
import { increment, decrement, reset } from '../state/counters/counter.actions';
import { selectCount } from '../state/counters/counter.selector';


@Component({
  selector: 'app-counter',
  standalone:true,
  imports: [AsyncPipe],

  templateUrl: './counter.html',

  styleUrl: './counter.css',
})
export class Counter {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {

    this.count$ =
    this.store.select(selectCount);

  }

  incrementCount() {

    this.store.dispatch(increment());

  }

  decrementCount() {

    this.store.dispatch(decrement());

  }

  resetCount() {

    this.store.dispatch(reset());

  }

}