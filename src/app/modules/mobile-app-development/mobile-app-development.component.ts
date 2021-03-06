import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app-development',
  templateUrl: './mobile-app-development.component.html',
  styleUrls: ['./mobile-app-development.component.scss']
})
export class MobileAppDevelopmentComponent implements OnInit {

  enquiryOpen: boolean = false;

  constructor() { }

  ngOnInit() {
    
  }

  enquiryClick() {
    this.enquiryOpen = true;
  }

  enquiryClose() {
    this.enquiryOpen = false;
  }

}
