import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent {

  @Input() content!: Content;

  itemDetail() {
    console.log(`Id: ${this.content.id}, Title: ${this.content.title}`);
  }
  
}
