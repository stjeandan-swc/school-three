import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens-shoes',
  templateUrl: './womens-shoes.component.html',
  styleUrls: ['./womens-shoes.component.css']
})
export class WomensShoesComponent implements OnInit {

  imagePaths = [
    { id: 1, name: '/assets/img/WomenOne.png'},
    { id: 2, name: '/assets/img/womenTwo.png'},
    { id: 3, name: '/assets/img/womensThree.png'},
    { id: 4, name: '/assets/img/womensFour.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
