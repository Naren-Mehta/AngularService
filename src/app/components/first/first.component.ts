import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user.service'


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  user : string;
  users : string [] ;

  constructor(private userService : UserService) { }

  ngOnInit() {

    this.user = this.userService.getFirstUser();
    this.users= this.userService.getAllUser();

    console.log(this.user);
    console.log(this.users);
  }

  addNewUser(newUser){
    this.userService.addNewUser(newUser);
  }

}
