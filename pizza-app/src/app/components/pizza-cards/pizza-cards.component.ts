import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Pizza } from '../../types/interfaces/pizza.interface';
import { PizzaService } from '../../services/pizza.service';

@Component({
  selector: 'app-pizza-cards',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    PizzaCardsComponent
  ],
  templateUrl: './pizza-cards.component.html',
  styleUrl: './pizza-cards.component.scss'
})
export class PizzaCardsComponent {
  pizzas: Pizza[] = [];
  breakPoint: number = 3; //  amount of cards in a row
  
  constructor(private pizzaService: PizzaService ) {
    
  }
  ngOnInit(): void{
    this.pizzas = this.pizzaService.defaultPizzas;
  }

  onResize(event: any){
    this.breakPoint = Math.floor(event.target.innerWidth / 320);
  }

}
