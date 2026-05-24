import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.userList();
  }
}