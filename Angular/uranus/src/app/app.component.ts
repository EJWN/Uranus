import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarModule } from './modules/navbar.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
