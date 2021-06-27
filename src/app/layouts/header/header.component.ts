import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  enquiryOpen: boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
    var windowpageName = window.location.pathname
  }

  enquiryClick() {
    this.enquiryOpen = true;
  }

  enquiryClose() {
    this.enquiryOpen = false;
  }

}
