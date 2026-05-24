import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone:true,
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {}
