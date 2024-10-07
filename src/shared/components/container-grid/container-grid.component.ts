import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-container-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './container-grid.component.html',
  styleUrl: './container-grid.component.scss'
})
export class ContainerGridComponent {
  @Input() title: string = ""
}
