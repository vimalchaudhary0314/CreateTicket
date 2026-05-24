import { AsyncPipe, CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import {
  RouterLink,
  RouterLinkActive
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../state/app.state';
import { selectCount } from '../state/counters/counter.selector';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    AsyncPipe
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  count$: Observable<number>;

  constructor(private store: Store<AppState>) {

    this.count$ =
    this.store.select(selectCount);

  }
}