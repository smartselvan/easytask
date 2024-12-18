import { Component, Input } from '@angular/core';
import { Task } from './task/task.model';
import { dummyTasks } from '../dummy-tasks';
import { TaskComponent } from "./task/task.component";
import { TaskFormComponent } from "./task-form/task-form.component";


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUserId?: string;
  @Input() selectedUserName?: string;

  availableTasks: Task[] = dummyTasks;
  displayForm: boolean = false;

  get userTasks(){
    return this.availableTasks.filter((task) => task.userId === this.selectedUserId);
  }
  
  onTaskComplete(taskId: string) {
    this.availableTasks = this.availableTasks.filter((task) => task.id !== taskId);
  }
  
  addTask() {
    this.displayForm = true;
  }
  
  onCancel() {
    this.displayForm = false;
  }
}
