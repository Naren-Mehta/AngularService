import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  @ViewChild("f")
  myForm:NgForm;

  ngOnInit() {

    
  }

  onSubmit(){
    console.log(this.myForm.value)
  }

}
