import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { CareersComponent } from './modules/careers/careers.component';
import { ServicesComponent } from './modules/services/services.component';
import { PagenotfoundComponent } from './modules/pagenotfound/pagenotfound.component';
import { NewslettersComponent } from './modules/newsletters/newsletters.component';
import { WebDesignComponent } from './modules/services/web-design/web-design.component';
import { DigitalStrategyComponent } from './modules/services/digital-strategy/digital-strategy.component';
import { ReviewsComponent } from './modules/reviews/reviews.component';
import { SeoServicesComponent } from './modules/seo-services/seo-services.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TechnologyComponent } from './modules/technology/technology.component';
import { ApproachComponent } from './modules/approach/approach.component';
import { EngagementModelComponent } from './modules/engagement-model/engagement-model.component';
import { UxDesignComponent } from './modules/ux-design/ux-design.component';
import { UiDevelopmentComponent } from './modules/ui-development/ui-development.component';
import { InterfaceDesignComponent } from './modules/interface-design/interface-design.component';
import { MobileAppDevelopmentComponent } from './modules/mobile-app-development/mobile-app-development.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'newsletters', component: NewslettersComponent },
  { path: 'web-design', component: WebDesignComponent },
  { path: 'digital-strategy', component: DigitalStrategyComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'seo-services', component: SeoServicesComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'approach', component: ApproachComponent },
  { path: 'engagement-model', component: EngagementModelComponent },
  { path: 'ux-design', component: UxDesignComponent },
  { path: 'ui-development', component: UiDevelopmentComponent },
  { path: 'interface-design', component: InterfaceDesignComponent },
  { path: 'mobile-app-development', component: MobileAppDevelopmentComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes)
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'corrected'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
