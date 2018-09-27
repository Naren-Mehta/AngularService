import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { Config } from 'protractor/built/config';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList;

  constructor(private todoSerice : TodoService) { }

  ngOnInit() {
    this.todoSerice.getAllTodo().subscribe((data)=>{
      this.todoList= data;
      });
  }

  loadTodoList(){
    this.todoSerice.getAllTodoWithPromise().then((data)=>{
      this.todoList=data;
    });
  }

}
