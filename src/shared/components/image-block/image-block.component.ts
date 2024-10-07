import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropsButtonImageBlock } from 'shared/types/ImageBlock.type';

@Component({
  selector: 'app-image-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-block.component.html',
  styleUrl: './image-block.component.scss'
})
export class ImageBlockComponent {
  icons: string[] = [
    "./assets/images/ave.svg",
    "./assets/images/Shape.svg",
    "./assets/images/Shape.svg",
    "./assets/images/Shape.svg"
  ]

  @Input() button?: PropsButtonImageBlock
  @Input() type: "primary" | "secondary" = "primary"
  @Input() posImg: "left" | "right" = "right"
  @Input() img: string = ""
  @Input() title: string = ""
  @Input() text: string = ""

  ngOnInit() {
    if (!this.title) {
      throw new Error('O atributo "title" é obrigatório');
    }

    if (!this.text) {
      throw new Error('O atributo "text" é obrigatório');
    }

    if (!this.img) {
      throw new Error('O atributo "img" é obrigatório');
    }
  }
}
