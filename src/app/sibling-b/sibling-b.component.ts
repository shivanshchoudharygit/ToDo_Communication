import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-sibling-b',
  standalone: true,
  imports: [AsyncPipe],
  template: `
    <h2>Sibling B</h2>
    <p>Task received: {{ todoService.todo$ | async }}</p>
  `
})
export class SiblingBComponent {
  constructor(public todoService: TodoService) {}
}
