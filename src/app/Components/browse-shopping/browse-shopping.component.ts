import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-shopping',
  templateUrl: './browse-shopping.component.html',
  styleUrls: ['./browse-shopping.component.css']
})
export class BrowseShoppingComponent implements OnInit {

  constructor() { }

  DataList = [{id:1,imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc",quantity:0,Cost:200},
  {id:2,imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc",quantity:0,Cost:400},
  {id:3,imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc",quantity:0,Cost:250},
  {id:4,imgurl:"assets/imgs/deathstroke1.jpg",slidetitle:"First Title",slideDesc:"First Slide Desc",quantity:0,Cost:2000},
  {id:5,imgurl:"assets/imgs/deathstroke2.jpg",slidetitle:"Second Title",slideDesc:"Second Slide Desc",quantity:0,Cost:700},
  {id:6,imgurl:"assets/imgs/deathstroke3.jpg",slidetitle:"Third Title",slideDesc:"Third Slide Desc",quantity:0,Cost:1300}];

  ngOnInit(): void {
  }

}
