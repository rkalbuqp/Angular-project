import { Routes } from '@angular/router';
import { PromotionsComponent } from './Pages/promotions/promotions.component';
import { ContactUsComponent } from './Pages/contact-us/contact-us.component';
import { HomeComponent } from './Pages/home/home.component';
import { AboutComponent } from './Pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'promotions', component: PromotionsComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
];
