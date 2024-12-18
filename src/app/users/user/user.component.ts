import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from "../../shared/card/card.component";


@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input() selected: boolean = false;
  @Output() select= new EventEmitter<User>();

  get imagePath(){
    return `/assets/users/${this.user.avatar}`;
  }
  onUserSelect(){
    this.select.emit(this.user);
  }
}
