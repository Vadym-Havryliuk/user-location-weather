import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-added-users',
  templateUrl: './added-users.component.html',
  styleUrls: ['./added-users.component.css']
})
export class AddedUsersComponent {
  constructor(private service: UsersService) {}
  
  users = this.service.users;

  newUser() {
    this.service.addUser(); 
  }

  remove(idx: number) {
    this.service.removeUser(idx);
  }

  save() {}
}
