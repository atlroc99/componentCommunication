import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMessage = "this is from parent.";
  ingredients: Ingredient [] =[];

  constructor() {
    this.ingredients.push(new Ingredient('tomatoes', 2));
    this.ingredients.push(new Ingredient('chilli', 4));
    this.ingredients.push(new Ingredient('sugar', 3));
    this.ingredients.push(new Ingredient('salt', 1));
   }

  ngOnInit() {
  }

}
