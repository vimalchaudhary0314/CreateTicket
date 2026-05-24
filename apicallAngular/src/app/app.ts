
import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Counter } from './counter/counter';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {

}

