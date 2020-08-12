import { LoginService } from './../allservices/login.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private logServ:LoginService) {
  }

  @Input('project-title') title:string ;
  userID:number=1;

  ngOnInit(): void {

  }

}
