import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service"
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators , FormControl } from '@angular/forms';




@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
  
})
export class SigninComponent implements OnInit {
  
  userForm: FormGroup;
  test ;
  newuser ;

  passReset = false; // set to true when password reset is triggered

  constructor(public auth  :AuthService ,private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      email :   new FormControl(),
      password: new FormControl()
      

  
   });

  }

  signup(): void {
    this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password'])
  }

  login(): void {
    this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password'])
  }


  signOut(): void {
    this.auth. signOut ()
  }

}
