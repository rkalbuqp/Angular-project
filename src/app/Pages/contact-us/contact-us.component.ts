import { Component } from '@angular/core';
import { ContainerGridComponent } from '../../../shared/components/container-grid/container-grid.component';
import { ImageBlockComponent } from '../../../shared/components/image-block/image-block.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContainerGridComponent, ImageBlockComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
