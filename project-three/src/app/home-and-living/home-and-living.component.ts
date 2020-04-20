import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-and-living',
  templateUrl: './home-and-living.component.html',
  styleUrls: ['./home-and-living.component.css']
})
export class HomeAndLivingComponent implements OnInit {

  imagePaths = [
    { id: 1, name: '/assets/img/pillowOne.png'},
    { id: 2, name: '/assets/img/pillowTwo.png'},
    { id: 3, name: '/assets/img/pillowThree.png'},
    { id: 4, name: '/assets/img/pillowFour.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
