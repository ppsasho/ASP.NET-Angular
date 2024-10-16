import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { MatList, MatListModule } from '@angular/material/list';
import { NormalizeEnumPipe } from '../../pipes/normalize-enum.pipe';
import { Pizza } from '../../types/interfaces/pizza.interface';
import { PizzaService } from '../../services/pizza.service';
import { Ingredient } from '../../types/enums/ingredients.enum';
import { MatChipOption } from '@angular/material/chips';

@Component({
  selector: 'app-ingredients-list',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    NormalizeEnumPipe
  ],
  templateUrl: './ingredients-list.component.html',
  styleUrl: './ingredients-list.component.scss'
})
export class IngredientsListComponent {
  selectedIngredients = input<Ingredient[]>([]);

  onSelectIngredients = output<Ingredient[]>();

  ingredients: Ingredient[] = Object.values(Ingredient);

  constructor(private pizzaService: PizzaService){}

  onSelect(event: any){
    this.onSelectIngredients.emit(
      event.source.selectedOptions.selected.map(
        (item: MatChipOption) => item.value
      )
    )
  }
}
