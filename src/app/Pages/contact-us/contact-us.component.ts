import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContatoComponent } from '../../components/contato/contato.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FooterComponent, ContatoComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {}
