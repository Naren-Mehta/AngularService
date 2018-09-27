import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: string[] = ['Naren','Singh', 'Mehta'];

  constructor() { }

getFirstUser(){
  return this.users[0];
}

getAllUser(){
  return this.users;
}

addNewUser(newUser){
  this.users.push(newUser);
}

}
