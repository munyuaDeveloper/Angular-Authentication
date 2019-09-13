import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

import { FormBuilder, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData: any = [];
  userDetails: any = []

  // reactive 
  loginForm: FormGroup;

  constructor(private _auth: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  loginUser() {
    // this.data.push(this.loginUserData);
    this.loginUserData.push(this.loginForm.value);
    this.userDetails = JSON.stringify(this.loginUserData);

    // console.log(this.userDetails);
    this._auth.loginUser(this.userDetails)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('refresh_token', res.detail.refresh_token)
          this._router.navigate(['/dashboard'])
        },
        err => console.log(err)
      )
  }

}
