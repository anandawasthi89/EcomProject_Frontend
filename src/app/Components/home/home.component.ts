import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 CarouselHeight = "40vh";
 CardHeight = "40vh";

  OfferAddDetails = [{imgurl:"assets/imgs/aquaman1.gif",slidetitle:"First Title",slideDesc:"First Slide Desc"},
  {imgurl:"assets/imgs/thewitcher.png",slidetitle:"Second Title",slideDesc:"Second Slide Desc"},
  {imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc"}];

  DataList = [{id:1,imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc",quantity:0,Cost:200},
  {id:2,imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc",quantity:0,Cost:400},
  {id:3,imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc",quantity:0,Cost:250}];


}
