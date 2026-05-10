import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Task {
  id?: number;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api = 'http://backend-service:5000/api/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.api, task);
  }
}