import { CommonModule } from '@angular/common';
import { Component, computed, Input } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { Pizza } from '../../types/interfaces/pizza.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pizza-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './pizza-card.component.html',
  styleUrl: './pizza-card.component.scss'
})
export class PizzaCardComponent {
  @Input() pizza: Pizza | undefined
  // isLoggedIn = computed(() => this.authService.isLoggedIn());


  constructor(authService: AuthService) {
    // authService = AuthService;
    
  }
}
