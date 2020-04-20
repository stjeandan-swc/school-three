import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addActive() {
    const accordion = document.getElementById('accordion');
    const menu = document.getElementById('accordion-content');

    accordion.classList.toggle('active');
    menu.classList.toggle('active');
  }
}
