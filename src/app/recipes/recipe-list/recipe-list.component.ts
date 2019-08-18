import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Caprese', 'Tomatoes, mozzarella, basil and olive oil', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw2rauJQYClhdU9m66fHMI7_RQvxmOiweNiqa1eLcOqXznkR35jQ', ['tomatoes', 'mozzarella']),
    new Recipe('Roasted Chicken and Butter Garlic Vegetables, potatoes ', 'Chicken, butter, garlic, carrots and broccoli', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GWnWJs0atVddSXxZPB5qZFiZ86QCF_E9bGjJ6cWoSeLu1CQPCQ', ['tomatoes', 'mozzarella'])
  ];
  constructor() { }

  ngOnInit() {
  }

}
