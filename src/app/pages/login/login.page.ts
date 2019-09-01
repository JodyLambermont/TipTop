import { AuthenticationService } from './../../authentication.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentialsForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      email: ["",[Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.minLength(4)]]
    });
  }

  onSubmit(){
    //console.log("hier");
    //console.log(this.credentialsForm.value);
    this.authenticationService.login(this.credentialsForm.value).subscribe();
  }

}
