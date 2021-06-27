import { BrowserModule } from '@angular/platform-browser';import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { CareersComponent } from './modules/careers/careers.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { ServicesComponent } from './modules/services/services.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { NewslettersComponent } from './modules/newsletters/newsletters.component';
import { BannerComponent } from './modules/banner/banner/banner.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WebDesignComponent } from './modules/services/web-design/web-design.component';
import { DigitalStrategyComponent } from './modules/services/digital-strategy/digital-strategy.component';
import { ReviewsComponent } from './modules/reviews/reviews.component';
import { SeoServicesComponent } from './modules/seo-services/seo-services.component';
import { TechnologyComponent } from './modules/technology/technology.component';
import { ApproachComponent } from './modules/approach/approach.component';
import { EngagementModelComponent } from './modules/engagement-model/engagement-model.component';
import { UxDesignComponent } from './modules/ux-design/ux-design.component';
import { UiDevelopmentComponent } from './modules/ui-development/ui-development.component';
import { InterfaceDesignComponent } from './modules/interface-design/interface-design.component';
import { MobileAppDevelopmentComponent } from './modules/mobile-app-development/mobile-app-development.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CareersComponent,
    ContactusComponent,
    AboutusComponent,
    ServicesComponent,
    PagenotfoundComponent,
    NewslettersComponent,
    BannerComponent,
    WebDesignComponent,
    DigitalStrategyComponent,
    ReviewsComponent,
    SeoServicesComponent,
    TechnologyComponent,
    ApproachComponent,
    EngagementModelComponent,
    UxDesignComponent,
    UiDevelopmentComponent,
    InterfaceDesignComponent,
    MobileAppDevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
