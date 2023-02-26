import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'ecom-home-nav',
  templateUrl: './ecom-home-nav.component.html',
  styleUrls: ['./ecom-home-nav.component.css']
})
export class ECOMHomeNavComponent implements OnInit {

  constructor(private loginservice : LoginService,private router:Router) { 
    router.events.subscribe(events => {
      console.log('Angular has changed route');
      this.isLoggedIn = this.loginservice.isLoggedIn(); 
      this.user = this.loginservice.getUser();
      this.Username= this.user!=null?this.user["user"]["name"]:"Guest";
    });
  }
  
  isLoggedIn : boolean = false; 
  user = this.loginservice.getUser();
  Username : String = "Guest";
  
  ngOnInit(): void {
  }
  logoutNow(){
    this.loginservice.logout();
    this.Username = "Guest";
  }
}
