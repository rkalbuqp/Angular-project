import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-buy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-buy.component.html',
  styleUrl: './card-buy.component.scss'
})
export class CardBuyComponent {
  isFavorited: boolean = false;
  @Input() img: string = "";
  @Input() title: string = "";
  @Input() price: number = 0;

  ngOnInit(): void {
    if (!this.title) {
      throw new Error('O atributo "title" é obrigatório');
    }

    if (!this.img) {
      throw new Error('O atributo "img" é obrigatório');
    }

    if (!this.price) {
      throw new Error('O atributo "price" é obrigatório');
    }
  }

  handleFavorited() {
    this.isFavorited = !this.isFavorited
  }

  get formattedPrice() {
    return `R$ ${this.price}`.replace(".", ",")
  }
}
