import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-passvalue',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './passvalue.html',
  styleUrls: ['./passvalue.css'],
})
export class Passvalue {

  constructor(private router: Router) {}

  userData = signal({ name: 'vimal', age: 23, id: 1 });

  goToProfile() {
    this.router.navigate(['profile'], {
      queryParams: {
        id: 10,
        name: 'Arush',
        age: 21
      }
    });
  }
}