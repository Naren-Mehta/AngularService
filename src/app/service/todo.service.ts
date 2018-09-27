import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { resolve } from 'dns';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getAllTodo(){
   var url = "https://jsonplaceholder.typicode.com/todos";
   var todoList= this.http.get(url);
   return todoList;
  }

  getAllTodoWithPromise(){
    var url = "https://jsonplaceholder.typicode.com/todos";

    const appStatus=new Promise((resolve, reject) =>{
      this.http.get(url).subscribe((data) =>{
        resolve(data);
      });
    });

    return appStatus;
   }

   getAllTodoWithMap(){
    // var url = "https://jsonplaceholder.typicode.com/todos";
    //  return this.http.get(url).map((data) =>{
    //    console.log(data);
    //  });

   }


}
