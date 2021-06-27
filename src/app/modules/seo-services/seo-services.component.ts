import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seo-services',
  templateUrl: './seo-services.component.html',
  styleUrls: ['./seo-services.component.scss']
})
export class SeoServicesComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
  }

}
