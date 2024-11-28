import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})


export class DataService {

  url = environment.apiUrl;
  constructor( private http: HttpClient) { }


  
  create(todo:any){
    return this.http.post(`${this.url}/ajout` , todo);
 }
 remove(id:number){
     
    return this.http.delete(`${this.url}/remove/${id}`);
 }
 

 list(){
  return this.http.get(`${this.url}/list`);
 }
}



