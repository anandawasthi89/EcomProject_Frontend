import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private login: LoginService) {
    if(this.fetchUser!=null){
      this.User.name = this.fetchUser["user"]["name"];
      this.User.email = this.fetchUser["user"]["email"];
    }
   }

  fetchUser = this.login.getUser();
  User = {
    profileUrl : "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg",
    name : "Undefined",
    email : "Undefined"
  }

  ngOnInit(): void {
  }



}
