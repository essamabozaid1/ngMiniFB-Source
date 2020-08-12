import { LoginUser } from './../models/login-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }




  EnterLoginData(loginData:LoginUser):Observable<LoginUser>{
    return this.http.post<LoginUser>("http://sharpacademy-001-site1.htempurl.com/api/auth",loginData);


  }

}



