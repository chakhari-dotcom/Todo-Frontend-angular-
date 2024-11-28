import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Router, RouterModule } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { TodoComponent } from '../todo/todo.component';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [TodoComponent, CommonModule,RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})



export class ListComponent {

  constructor(private data: DataService, private router: Router) {}
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

  remove(_id: any) {
    this.data.remove(_id).subscribe({
      next: (res) => {
        console.log(res);
        // Mise à jour de la liste locale pour supprimer l'élément
        this.todos = this.todos.filter((todo: any) => todo._id !== _id);
      },
      error: (err) => {
        console.log(err);
        alert('Erreur lors de la suppression du ToDo. Veuillez réessayer.');
      }
    });
  }

}





