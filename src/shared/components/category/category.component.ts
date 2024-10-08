import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {
  @Input() img: string = ""
  @Input() title: string = ""
  @Input() qnt: number = 0

  ngOnInit() {
    if (!this.img) {
      throw new Error('O atributo "img" é obrigatório');
    }

    if (!this.title) {
      throw new Error('O atributo "title" é obrigatório');
    }

    if (!this.qnt) {
      throw new Error('O atributo "qnt" é obrigatório');
    }
  }
}
