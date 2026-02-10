import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  public loginFrm!: FormGroup

  constructor(private fb:FormBuilder){
    this.loginFrm= this.fb.group({
      email:['',[Validators.required, Validators.email]]
    })
  }
}
