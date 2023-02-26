import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  constructor(private snack : MatSnackBar,private login: LoginService, private route : Router) { }

  AddButtonClicked:boolean = false;
  @Input() product = {
    id:0,
    imgurl:"",
    slidetitle:"",
    slideDesc:"",
    quantity:0,
    Cost:0
  }

  ngOnInit(): void {
  }

  add(){
    this.product.quantity++;
  }

  sub(){
    this.product.quantity--;
    if(this.product.quantity==0)
    this.AddButtonClicked=false;
  }

  getBuyOptions(){
    if(!this.login.isLoggedIn()){
      this.snack.open("Please login before adding to cart",'',{
        duration:3000
      });
      this.route.navigate(['/login']);
    }
    this.AddButtonClicked=true;
    this.add();
  }


  addToCart(){
    
  }

}
