import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { TasksComponent } from './tasks/tasks.component';
import { User } from './users/user/user.model';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedUser?: User;

  onUserSelect(user: User) {
    this.selectedUser = user;
  }
}