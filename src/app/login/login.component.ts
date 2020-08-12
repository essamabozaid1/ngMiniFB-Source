
import { dropbox } from './animation/animation';
import { LoginUser } from './../models/login-user';
import { LoginService } from './../allservices/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    dropbox
  ]
})

export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private rout: Router) { }

  ngOnInit(): void {

  }


  returnValue: LoginUser;

  wrongPassword: boolean;

  loginFunc(loginData) {
    let observervalue: LoginUser = {
      id: null,
      loginName: loginData.username,
      password: loginData.password,
      userTypeId: null
    };

    this.loginService.EnterLoginData(observervalue).subscribe({
      next: (item) => { this.returnValue = item; },
      complete: () => {
        console.log(this.returnValue);
        if (this.returnValue.userTypeId == 0) {
          this.wrongPassword = true;
        } else if (this.returnValue.userTypeId == 1) {
          window.location.href = 'https://www.google.com/';
        } else if (this.returnValue.userTypeId == 2) {
          this.rout.navigate(['/posts']);
        }
      }
    });
  }

}
