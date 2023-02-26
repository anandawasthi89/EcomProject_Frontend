import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private snack : MatSnackBar, private login : LoginService, private route : Router) {  }
 
  LoginData = {
    email : "",
    password : "",
    saveCreds : false
  };

  OfferAddDetails = [{imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc"},
                     {imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc"},
                     {imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc"}];

  ngOnInit(): void {
  }

  submitForm(){
    console.log(this.LoginData);
    if(this.LoginData.email.trim() == '' || this.LoginData.email == null){
      this.snack.open("Username can't be empty",'',{
        duration:3000
      });
      return;
    }
    if(this.LoginData.password.trim() == '' || this.LoginData.password == null){
      this.snack.open("Password can't be empty",'',{
        duration:3000
      });
      return;
    }

    this.login.generateToken(this.LoginData).subscribe(
      (data:any)=>{
        this.login.loginUser(data);
        this.login.getCurrentUser().subscribe(
          (userdata)=>{
            this.login.setUser(userdata);
            console.log(userdata);
            //redirect to user home
            //window.location.href='/';
            this.route.navigate(['/']);
          },
          (error)=>{
            this.login.logout;
          }
        );
      },
      (error:any)=>{
        console.log("error: ");
        console.log(error);
      }
    )


  }

}
