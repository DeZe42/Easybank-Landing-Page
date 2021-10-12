import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  menuOpen: boolean = false;
  
  constructor() {

  }

  ngOnInit() {

  }

  openMenu(trueOrFalse) {
    this.menuOpen = trueOrFalse;
    let url = document.getElementsByTagName('body');
    if (trueOrFalse) {
      if (url) url[0].style.overflow = 'hidden';
    } else {
      if (url) url[0].style.overflow = 'auto';
    }
  }
}