import { Component } from '@angular/core';
import { ContainerGridComponent } from '../../../shared/components/container-grid/container-grid.component';
import { CardBuyComponent } from '../../../shared/components/card-buy/card-buy.component';

@Component({
  selector: 'app-promotions',
  standalone: true,
  imports: [ContainerGridComponent, CardBuyComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss',
})
export class PromotionsComponent {}
