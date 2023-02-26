import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-template',
  templateUrl: './carousel-template.component.html',
  styleUrls: ['./carousel-template.component.css']
})
export class CarouselTemplateComponent implements OnInit {

  constructor(config: NgbCarouselConfig) { 
        // customize default values of carousels used by this component tree
        config.interval = 2000;
        config.wrap = true;
        config.keyboard = false;
        config.pauseOnHover = false;
  }

  @Input()  SlidesList!: any | null;
  @Input()  StyleHeight = "60vh";

  ngOnInit(): void {
  }

}
