import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { DataService } from '../service/data.service';
import { TodoComponent } from '../todo/todo.component';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ListComponent } from '../list/list.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, TodoComponent, RouterModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {

  constructor(private data:DataService , private router: Router){}

  todo={
    text:'',
    priority:0
 }

 todos : any = [];

  ngOnInit(): void {
 
    this.data.list().subscribe({
      next: (res)=>{
        this.todos = res;
        console.log(this.todos);
        
        
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }


  ajout(){
    if(this.todo.text.trim()!==""){
    this.data.create(this.todo).subscribe({
      next:(res)=>{
        this.todo={
          text:'',
          priority:0
       }
          
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Todo has been saved",
          showConfirmButton: false,
          timer: 1500
        });
       window.location.reload();
        
        
      },
      error : (err)=>{
        console.log(err);
        
      }
    })}

  }

 


}
