import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CurrencyConvertorPipe } from '../pipe/currency-convertor-pipe';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone:true,
  imports: [CommonModule,CurrencyConvertorPipe,RouterOutlet],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  title="I am learing Pipes in Angular";
  name="vimal chaudhary";
  date = new Date();
  amount=200;

  amounts=8520;
}
