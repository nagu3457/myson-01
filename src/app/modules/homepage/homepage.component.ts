import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  slidesStore: any = [
    {
      id: 1,
      src: "/assets/img/new/banner/DMP_2.png",
      text1: "DMP Analytics",
      text2: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 2,
      src: "/assets/img/new/banner/Web_Deployment_API_2.png",
      text1: "Web Deployment API",
      text2: "We developed an API for internal use in a large company that has over 100,000 employees worldwide. This solution automates particular tasks in a website deployment process. It helps specialists to deploy hundreds of PHP websites, track errors, copy databases, and perform other related actions quickly and effectively.",
    },
    {
      id: 3,
      src: "/assets/img/new/banner/Hypeanalysis_1.png",
      text1: "Web Deployment API",
      text2: "We developed an API for internal use in a large company that has over 100,000 employees worldwide. This solution automates particular tasks in a website deployment process. It helps specialists to deploy hundreds of PHP websites, track errors, copy databases, and perform other related actions quickly and effectively."
    },
  ]

  slides = [
    { img: "http://placehold.it/350x150/000000" },
    { img: "http://placehold.it/350x150/111111" },
    { img: "http://placehold.it/350x150/333333" },
    { img: "http://placehold.it/350x150/666666" }
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1 };

  addSlide() {
    this.slides.push({ img: "http://placehold.it/350x150/777777" })
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
    console.log('slick initialized');
  }

  breakpoint(e) {
    console.log('breakpoint');
  }

  afterChange(e) {
    console.log('afterChange');
  }

  beforeChange(e) {
    console.log('beforeChange');
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplaySpeed: 3000,
    dots: true,
    autoplay: true,
    autoplayTimeout: 6000,
    // autoplayHoverPause: true,
    // animateOut: 'slideOutDown',
    // animateIn: 'flip',
    // slideBy: 1,
    navSpeed: 3000,
    dotsSpeed: 3000,
    lazyLoad: true,
    // navText: [left_arrow_svg, right_arrow_svg],
    responsiveRefreshRate: 200,
    rewind: false,
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }

  mobileAppshow: any = 0;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  }

  goToPage(pageName) {
    this.router.navigateByUrl(pageName);
  }

  onClickshow(i) {
    this.mobileAppshow = i;
  }

}
