import { Component, OnInit } from '@angular/core';
import { TaskService, Task } from './task';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],  // ✅ CORRECT PLACE
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {

  tasks: Task[] = [];
  newTask = '';

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }
  addTask() {
    if (!this.newTask) return;

    this.taskService.addTask({
      title: this.newTask,
    }).subscribe(() => {
      this.newTask = '';
      this.loadTasks();
    });
  }
}