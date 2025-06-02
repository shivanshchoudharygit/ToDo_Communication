import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todoSubject = new BehaviorSubject<string>('Initial Task');
  todo$ = this.todoSubject.asObservable();

  updateTodo(todo: string) {
    this.todoSubject.next(todo);
  }
}
