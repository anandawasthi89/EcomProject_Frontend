import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RegisterUserService } from 'src/app/Services/register-user.service';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {

  constructor(private snack: MatSnackBar, private register : RegisterUserService) { }

  public newUser = {
      name: "",
      email: "",
      password: ""
  };

  public conpass=""

  public registerUser(){
    console.log(this.conpass);
    console.log(this.newUser);

    if(this.newUser.email==''||this.newUser.email==null){
      this.snack.open("Email can't be empty","",{
        duration:3000
      });
      return;
    }
    if((this.newUser.email.includes('@')==false||this.newUser.email.includes('.')==false)||this.newUser.email.indexOf('@')>=this.newUser.email.lastIndexOf('.')){
      this.snack.open("email not in correct format","",{
        duration:3000
      });
      return;
    }
    if(this.newUser.password==''||this.newUser.password==null){
      this.snack.open("Password can't be empty","",{
        duration:3000
      });
      return;
    }
    if(this.newUser.password!=this.conpass){
      this.snack.open("Password does not match confirm password field","",{
        duration:3000
      });
      return;
    }
    //validations done, now sending the data to RegisterService
    
    this.register.registerNewUser(this.newUser).subscribe(
      (data:any)=>{
        console.log(data);
      },
      (error:any)=>{
        console.log("error: ");
        console.log(error);
      }
    )


  }

  RandomImage = "assets/imgs/deathstroke1.jpg";

  ngOnInit(): void {
  }

}
