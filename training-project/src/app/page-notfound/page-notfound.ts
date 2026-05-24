import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-notfound',
  standalone:true,
  imports: [RouterLink,CommonModule],
  templateUrl: './page-notfound.html',
  styleUrl: './page-notfound.css',
})
export class PageNotfound {}
