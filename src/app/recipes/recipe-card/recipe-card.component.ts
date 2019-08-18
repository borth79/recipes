import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {
  ingredients = [
      new Ingredient('Yellow Onion', 1, 'Large'),
      new Ingredient('Bell Pepper', 1, 'Large'),
      new Ingredient('Corn', 1, 'Bag - Frozen')
    ];
  constructor() { }

  ngOnInit() {
  }

}
