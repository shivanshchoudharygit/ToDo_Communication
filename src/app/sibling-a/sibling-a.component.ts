import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sibling-a',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Sibling A</h2>
    <input [(ngModel)]="task" placeholder="New task">
    <button (click)="send()">Send to Sibling B</button>
  `
})
export class SiblingAComponent {
  task = '';
  constructor(private todoService: TodoService) {}

  send() {
    this.todoService.updateTodo(this.task);
  }
}
