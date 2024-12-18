import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() cancel = new EventEmitter<void>();

  title: string = '';
  summary: string = '';
  dueDate: string = '';

  onCancel() {
    this.cancel.emit();
  }
}
