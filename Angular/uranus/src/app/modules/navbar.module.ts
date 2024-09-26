import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FancyButtonComponent } from '../shared/fancy-button/fancy-button.component';
import { FancyButtonService } from '../shared/fancy-button/fancy-button.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, NavbarComponent, FancyButtonComponent],
  exports: [NavbarComponent, FancyButtonComponent],
  providers: [FancyButtonService]
})
export class NavbarModule { }
