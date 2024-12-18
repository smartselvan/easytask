import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user/user.model';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-users',
  imports: [UserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Output() userSelect = new EventEmitter<User>();
  users: User[] = DUMMY_USERS;
  selectedUserId: string = '';

  onUserSelect(user: User) {
    this.selectedUserId = user.id;
    this.userSelect.emit(user);
  }
}
