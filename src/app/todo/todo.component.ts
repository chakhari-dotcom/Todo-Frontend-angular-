import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { ListComponent } from '../list/list.component';
import { DataService } from '../service/data.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, InputComponent,ListComponent,RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {


}
