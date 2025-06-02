import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from '../child/child.component'; // ✅ Import the child

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent], // ✅ Add child here
  template: `
    <h2>Parent Component</h2>
    <input [(ngModel)]="todo" placeholder="Enter todo" />
    <button (click)="addTodo()">Add Todo</button>
    <app-child [task]="todo" (taskDone)="onChildTaskDone($event)"></app-child>
  `
})
export class ParentComponent {
  todo: string = '';

  addTodo() {
    console.log('Parent added:', this.todo);
  }

  onChildTaskDone(msg: string) {
    console.log('Child completed:', msg);
  }
}
