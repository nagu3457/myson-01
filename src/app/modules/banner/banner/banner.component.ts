import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  slidesStore: any = [
    {
      id: 1,
      src: "./assets/img/banner/scrolling/web_design.jpg",
      text1: "Responsive Website Design: Why it Matters for You Company",
      text2: "As mobile website traffic only continues to grow, companies can no longer procrastinate about having a responsive website. Responsive website design has long exited the “early adopter” phase. Internet users now fully expect websites to intelligently respond to whatever device…",
      text3: 'Read More'
    },
    {
      id: 2,
      src: "./assets/img/banner/scrolling/prof_web_design.jpg",
      text1: "4 Tips for Making Your Website SEO Friendly",
      text2: "Looking to make your website more SEO friendly? Search engine optimization takes time and is best done incrementally. To get the best result, I suggest you put on your 'always-be-improving' hat. Without further ado, here are 4 tips that…",
      text3: 'Read More'
    },
    {
      id: 3,
      src: "./assets/img/banner/scrolling/custom_web_dev.jpg",
      text1: "twitter + Google: What Does it Mean for Your Business?",
      text2: "The news about a twitter + Google partnership has many users wondering how it will affect their social media strategy.  While no one knows the exact details of this new friendship between the giants of search and social, we do know…",
      text3: 'Read More'
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    animateIn: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    navText: [],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      600: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  constructor() { }

  ngOnInit() {
  }

}
