import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients = [
    new Ingredient('Yellow Onion', 1, 'Large'),
    new Ingredient('Bell Pepper', 1, 'Large'),
    new Ingredient('Corn', 1, 'Bag - Frozen')
  ];
  constructor() { }

  ngOnInit() {
  }

}
