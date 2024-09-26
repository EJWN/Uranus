import { Injectable, signal } from '@angular/core';
import { NavbarModule } from '../../modules/navbar.module';

@Injectable({
  providedIn: NavbarModule,
})
export class FancyButtonService {
  isHovered = signal(false);

  set(isHovered: boolean) {
    this.isHovered.set(isHovered);
  }
}
