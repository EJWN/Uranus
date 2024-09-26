import { Component } from '@angular/core';
import { FancyButtonComponent } from '../shared/fancy-button/fancy-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ FancyButtonComponent ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
}
