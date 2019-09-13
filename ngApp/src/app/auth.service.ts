import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://192.168.214.100:8000/auth/login";
  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {

    // if 403? use headers 
    return this.http.post<any>(this._loginUrl, user, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    })
  }

  logoutUser() {
    localStorage.removeItem('refresh_token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('refresh_token')
  }

  loggedIn() {
    return !!localStorage.getItem('refresh_token')
  }
}
