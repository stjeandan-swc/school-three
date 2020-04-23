import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title = 'My Store';
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

  }

}
