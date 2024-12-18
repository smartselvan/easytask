import { Component, Input } from '@angular/core';
import { Task, TaskData } from './task/task.model';
import { dummyTasks } from '../dummy-tasks';
import { TaskComponent } from "./task/task.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { TaskService } from './task.service';


@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, TaskFormComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() selectedUserId!: string;
  @Input() selectedUserName?: string;

  displayForm: boolean = false;

  
  constructor(private taskService: TaskService){}
  
  get userTasks(){
    return this.taskService.getUserTasks(this.selectedUserId);
  }
  
  addTask() {
    this.displayForm = true;
  }
  
  onClose() {
    this.displayForm = false;
  }
    
}
