import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe';
import { Ingredient } from '../../types/enums/ingredients.enum';
import { PizzaSize } from '../../types/enums/pizza-size.enum';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-selected-ingredients',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    NormalizeEnumPipe

  ],
  templateUrl: './selected-ingredients.component.html',
  styleUrl: './selected-ingredients.component.scss'
})
export class SelectedIngredientsComponent {
  selectedIngredients = input<Ingredient[]>([]);

  handleDeleteIngredient = output<Ingredient>();

  size: PizzaSize = PizzaSize.MEDIUM;
  // activeOrder = computed(() => this.pizzaService.activeOrder());

  constructor(private pizzaService: PizzaSize,
              private authService: AuthService
  ){}

  // OnDeleteIngredient(ingredient: Ingredient)
}
