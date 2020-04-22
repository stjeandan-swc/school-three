import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kids-shoes',
  templateUrl: './kids-shoes.component.html',
  styleUrls: ['./kids-shoes.component.css']
})
export class KidsShoesComponent implements OnInit {

  imagePaths = [
    { id: 1, name: '/assets/img/kidsOne.png'},
    { id: 2, name: '/assets/img/kidsTwo.png'},
    { id: 3, name: '/assets/img/kidsThree.png'},
    { id: 4, name: '/assets/img/kidsFour.png'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
