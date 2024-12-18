import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskData } from '../task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Input() userId!: string;
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<TaskData>();

  constructor(private taskService:TaskService){  }

  title: string = '';
  summary: string = '';
  dueDate: string = '';

  onCancel() {
    this.close.emit();
  }
  
  onSubmit() {
    this.taskService.addUserTasks({
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId)
    this.close.emit()
  }
}
