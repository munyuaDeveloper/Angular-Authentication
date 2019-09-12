import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginUserData = {}
  data =[];
  array:any =[]

  constructor(private _auth: AuthService,
              private _router: Router) { }

  ngOnInit() {
  }

  loginUser () {
   this.data.push(this.loginUserData)
   this.array =JSON.stringify(this.data)
   this.array=JSON.stringify(JSON.parse(this.array));
   console.warn(this.array)
    this._auth.loginUser(this.array)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/dashboard'])
      },
      err => console.log(err)
    ) 
  }

}
