import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {

  technologySlides: any = [
    {
      id: 1,
      image1: "/assets/img/new/tech/1/slide_1-bg-2.png",
      image2: "/assets/img/new/tech/1/slide_1-bg-3.png",
      image3: "/assets/img/new/tech/1/web-development.png",
      image4: "/assets/img/new/tech/3d-screen-protection-glass-for-iphone.png",
      h1: "Target ",
      h2: "apps",
      span: "mobile, web, & desktop"
    },
    {
      id: 2,
      image1: "/assets/img/new/tech/2/computer-software-development-flat-illustration_67419-67.jpg",
      image2: "/assets/img/new/tech/slide_2-layer_2-bg.png",
      image3: "/assets/img/new/tech/2/magazine.png",
      image4: "/assets/img/new/tech/desktop____frames.png",
      h1: "Target ",
      h2: "apps",
      span: "mobile, web, & desktop"
    },
    {
      id: 3,
      image1: "/assets/img/new/tech/3/slide_3-1.jpg",
      image2: "/assets/img/new/tech/3/slide_3-2.png",
      image3: "/assets/img/new/tech/3/slide_3-3.png",
      image4: "/assets/img/new/tech/3d-screen-protection-glass-for-iphone.png",
      h1: "Design  ",
      h2: " apps",
      span: "beautiful"
    },
  ]

  technologyOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplaySpeed: 3000,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: 3000,
    dotsSpeed: 3000,
    lazyLoad: true,
    rewind: false,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
  }
}
