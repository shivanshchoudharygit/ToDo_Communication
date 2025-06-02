import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: `
    <h3>Child</h3>
    <p>Task: {{ task }}</p>
    <button (click)="markDone()">Mark as Done</button>
  `
})
export class ChildComponent {
  @Input() task = '';
  @Output() taskDone = new EventEmitter<string>();

  markDone() {
    this.taskDone.emit(`Finished: ${this.task}`);
  }
}
