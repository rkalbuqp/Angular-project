import { Component } from '@angular/core';
import { CardBuyComponent } from '@components/card-buy/card-buy.component';
import { ContainerGridComponent } from '@components/container-grid/container-grid.component';
import { ImageBlockComponent } from '@components/image-block/image-block.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardBuyComponent, ContainerGridComponent, ImageBlockComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent { }
