import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,CommonModule,Header,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  show:string= 'home';
  protected readonly title = signal('training-project');

}
