import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile {

  userName: string | null = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    // ✅ For Route Params (/profile/vimal)
    this.userName = this.route.snapshot.paramMap.get('name');

    // ✅ For Query Params (/profile?name=vimal)
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.userName = params['name'];
    });

    console.log(this.userName);
  }
}