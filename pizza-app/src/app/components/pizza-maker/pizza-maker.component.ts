import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-pizza-maker',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    // Add the rest of the components here
  ],
  templateUrl: './pizza-maker.component.html',
  styleUrl: './pizza-maker.component.scss'
})
export class PizzaMakerComponent {
  hasOrders = computed(() => !!this.pizzaService.activeOrder().length)

  /**
   *
   */
  constructor(private pizzaService: PizzaService) {
    
  }
}
