import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';
import { SiblingAComponent } from './sibling-a/sibling-a.component';
import { SiblingBComponent } from './sibling-b/sibling-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ParentComponent, SiblingAComponent, SiblingBComponent],
  template: `
    <h1>Todo App</h1>
    <app-parent></app-parent>
    <hr>
    <app-sibling-a></app-sibling-a>
    <app-sibling-b></app-sibling-b>
  `
})
export class AppComponent {}
