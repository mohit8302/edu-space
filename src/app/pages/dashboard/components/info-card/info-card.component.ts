import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-info-card',
  imports: [MatIconModule, CommonModule],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() iconSrc!: string;
  @Input() iconBg!: string;
  @Input() description!: string;
  @Input() trendIcon!: string;
  @Input() trendColor!: string;
  @Input() trendText!: string;  

  getIconSrc(): string {
    return `assets/icons/${this.iconSrc}.png`;
  }
}
