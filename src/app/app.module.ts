import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { ResumeComponent } from './components/curriculum-vitae/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NgcCookieConsentModule, NgcCookieConsentConfig} from "ngx-cookieconsent";

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "tinesoft.github.io"
  },
  "position": "bottom-right",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#ffffff",
      "text": "#194866",
      "link": "#ffffff"
    },
    "button": {
      "background": "#194866",
      "text": "#ffffff",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Refuse cookies",
    "link": "Learn more",
    "href": "https://policies.google.com/technologies/cookies",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    ShowcaseComponent,
    ResumeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
