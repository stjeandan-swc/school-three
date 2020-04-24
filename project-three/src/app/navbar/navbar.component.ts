import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'My Store';
  isOpen = false;
  currentWindowWidth: number;

  @HostListener('window:resize')
  onResize() {
    this.currentWindowWidth = window.innerWidth;
  }

  constructor() { }

  ngOnInit() {
    this.currentWindowWidth = window.innerWidth;
  }

  openMenu() {
    if (!this.isOpen) {
      document.getElementById('side-nav').classList.toggle('show-element');
      document.getElementById('backdrop').classList.toggle('show-element');
      this.isOpen = true;
    }
  }

  closeMenu() {
    if (this.isOpen) {
      document.getElementById('side-nav').classList.toggle('show-element');
      document.getElementById('backdrop').classList.toggle('show-element');
      this.isOpen = false;
    }
  }

}
