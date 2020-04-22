import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens-shoes',
  templateUrl: './mens-shoes.component.html',
  styleUrls: ['./mens-shoes.component.css']
})
export class MensShoesComponent implements OnInit {

  imagePaths = [
    { id: 1, name: '/assets/img/mensOne.png'},
    { id: 2, name: '/assets/img/mensTwo.png'},
    { id: 3, name: '/assets/img/mensThree.png'},
    { id: 4, name: '/assets/img/mensFour.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
