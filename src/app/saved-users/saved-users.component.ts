import { Component } from '@angular/core';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.css']
})
export class SavedUsersComponent {
    users: {
      name: string,
      sex: string,
      location: string,
      email: string,
      temperature: string
    }[] = [];

    remove(idx: number) {
       
    }
}
