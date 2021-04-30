import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public status: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    const navItem = document.querySelectorAll(".nav-item");
    Array.prototype.forEach.call(navItem, a => {
      a.addEventListener("click", () => {
        Array.prototype.forEach.call(navItem, a => {
          a.classList.remove("active")
        });
        document.body.classList.remove("nav-open");
        a.classList.add("active")
      })
    });
  }


  onToggleEvent() {
    document.body.classList.toggle("nav-open");
  }
}
