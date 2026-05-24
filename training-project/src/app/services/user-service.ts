import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  userList() {
    return [
      {
        id: 1,
        name: 'Arush',
        email: 'arush123@gmail.com',
        city: 'Meerut',
      },
      {
        id: 2,
        name: 'Alok',
        email: 'alok23@gmail.com',
        city: 'Basti',
      },
      {
        id: 3,
        name: 'Raj',
        email: 'raj123@gmail.com',
        city: 'Noida',
      },
      {
        id: 4,
        name: 'Shahil',
        email: 'shahil23@gmail.com',
        city: 'Kanpur',
      },
      {
        id: 5, // ✅ fixed duplicate id
        name: 'Anoop',
        email: 'anoop73@gmail.com',
        city: 'Delhi'
      }
    ];
  }
}