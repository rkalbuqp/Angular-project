import { Component } from '@angular/core';
import { CardBuyComponent } from '@components/card-buy/card-buy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardBuyComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
