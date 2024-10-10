import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FancyButtonService } from './fancy-button.service';

@Component({
  selector: 'app-fancy-button',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './fancy-button.component.html',
  styleUrl: './fancy-button.component.scss'
})
export class FancyButtonComponent {

  @Input() text: string = "";

  @Input() isActive: boolean = false;

  constructor(public fancyButtonService: FancyButtonService) {}

  onMouseEnter() {
    this.fancyButtonService.set(true);
  }

  onMouseLeave() {
    this.fancyButtonService.set(false);
  }
}
