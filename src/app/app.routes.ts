import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { InputComponent } from './input/input.component';
import { TodoComponent } from './todo/todo.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes: Routes = [

    { path: 'todo', component: TodoComponent },
    { path: 'list', component: ListComponent },
    { path: 'input', component: InputComponent },
    
];
 
