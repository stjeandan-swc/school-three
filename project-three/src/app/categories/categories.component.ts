import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {id: 1, name: 'Casual Shoes'},
    {id: 2, name: 'Heels'},
    {id: 3, name: 'Flats'},
    {id: 4, name: 'Sport Shoes'},
    {id: 5, name: 'Formal Shoes'},
    {id: 6, name: 'Sandals'},
    {id: 7, name: 'Flip Flops'},
    {id: 8, name: 'Sports Sandals'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
