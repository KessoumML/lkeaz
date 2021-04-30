import {Component, HostListener, NgZone, OnInit} from '@angular/core';

declare var Isotope: any;
declare var imagesLoaded: any;

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {

  private isotope: any;

  @HostListener('window:resize', ['$event'])
  onResize($event: any) {
    this.isotope.reloadItems();
    this.isotope.layout();
  }

  constructor(private zone: NgZone) {
  }

  ngOnInit(): void {
    let elem = document.querySelector(".masonry");
    let filter = document.querySelectorAll(".filter");
    this.isotope = new Isotope(elem, {
      itemSelector: ".item",
      masonry: {columnWidth: ".item-sizer"}
    });
    const isotope = this.isotope;
    const imgLoad = imagesLoaded(elem);
    imgLoad.on('always', function (instance: any) {
      Array.prototype.forEach.call(filter, a => {
        a.addEventListener("click", (b: any) => {
          b.stopPropagation();
          b.preventDefault();
          const updatedFilter = a.getAttribute("href");
          isotope.arrange({
            filter: updatedFilter
          });
          Array.prototype.forEach.call(filter, a => {
            a.classList.remove("active")
          });
          a.classList.add("active")
        })
      })
    });
    imgLoad.on('progress', function (instance: any, image: any) {
      isotope.reloadItems();
      isotope.layout();
    });
  }

}
