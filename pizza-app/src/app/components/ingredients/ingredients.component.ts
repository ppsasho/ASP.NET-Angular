import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { PizzaService } from '../../services/pizza.service';
import { Ingredient } from '../../types/enums/ingredients.enum';

@Component({
  selector: 'app-ingredients',
  standalone: true,
  imports: [
    CommonModule,
    // Add ingredients list and selected ingredients list components
  ],
  templateUrl: './ingredients.component.html',
  styleUrl: './ingredients.component.scss'
})
export class IngredientsComponent {

  ingredients = computed(() => this.pizzaService.selectedIngredients());

  constructor(private pizzaService: PizzaService) {}

  handleSelectedIngredients(ingredients: Ingredient[]){
    this.pizzaService.updateSelectedIngredients(ingredients);
  }

  handleDeleteIngredient(ingredient: Ingredient){
    const updatedIngredients = this.ingredients().filter((i) => i !== ingredient);
    this.handleSelectedIngredients(updatedIngredients);
  }

}
