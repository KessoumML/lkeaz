import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {
  NgcCookieConsentService
} from "ngx-cookieconsent";

declare var WebFont: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Mohamed KESSOUM';

  private scrollOffset: number = 0
  private popupCloseSubscription: Subscription = new Subscription;

  @HostListener('window:scroll', ['$event'])
  onScroll($event: any) {
    this.scrollOffset = window.pageYOffset;
    if (this.scrollOffset > 0) {
      document.body.classList.add("scrolled");
    } else {
      document.body.classList.remove("scrolled")
    }
  }


  constructor(private ccService: NgcCookieConsentService) {
  }

  ngOnInit(): void {
    if (sessionStorage.fonts) document.documentElement.classList.add('wf-active');
    const WebFontConfig = {
      google: {families: ["Poppins:500,600,700", "Raleway:300,400,400italic"]},
      timeout: 2e3,
      active: function () {
        sessionStorage.fonts = !0
      }
    };
    WebFont.load(WebFontConfig);

    if (sessionStorage.cookie){
      this.ccService.destroy();
    }
    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(()=>{
      sessionStorage.cookie = !0;
    });
  }

  ngOnDestroy() {
    this.popupCloseSubscription.unsubscribe();
  }
}
