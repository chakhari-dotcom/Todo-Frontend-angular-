import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoComponent, ListComponent,InputComponent,RouterModule],
  templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoFront';
}
