import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component'
import { UserService } from 'src/app/service/user.service';
import { TodoService } from 'src/app/service/todo.service';

import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todo/todo.component';

import {RouterModule, Routes} from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';

const appRoutes : Routes =[
  {path:"todo", component:TodoComponent},
  {path:"todoList", children : [ {path:"list", component:TodoListComponent}]},
  {path:"", component:TodoComponent},
  {path:"**", component:TodoComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HeaderComponent,
    FooterComponent,
    FirstComponent,
    SecondComponent,
    TodoComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    HttpClientModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
