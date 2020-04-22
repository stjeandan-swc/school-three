import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  openDropdown() {
    const sortBy = document.getElementById('sortBy');
    const sortMenu = document.getElementById('sortBy-content');

    sortBy.classList.toggle('active');
    sortMenu.classList.toggle('active');
  }

}
