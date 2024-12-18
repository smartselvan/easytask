import { Injectable } from '@angular/core';
import { Task, TaskData } from './task/task.model';
import { dummyTasks } from '../dummy-tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private availableTasks: Task[] = dummyTasks;

  constructor() {
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.availableTasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.availableTasks.filter((task) => task.userId === userId);
  }

  completeTask(taskId: string) {
    this.availableTasks = this.availableTasks.filter(
      (task) => task.id !== taskId
    );
    this.updateTasks();
  }

  addUserTasks(task: TaskData, userId: string) {
    this.availableTasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: task.title,
      summary: task.summary,
      dueDate: task.dueDate,
    });
    this.updateTasks();
  }

  private updateTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.availableTasks));
  }
}
