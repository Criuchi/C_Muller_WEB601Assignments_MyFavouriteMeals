import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent implements OnInit {
  contentList:ContentList;

  // Creation of the contructor to add 3 new items
  constructor() {
    this.contentList = new ContentList;
    this.contentList.addContentItem({
      id: 1,
      title: 'Tonkatsu',
      description: 'Famous Japanese meal which consists of breaded pork, rice and vegetables',
      creator: 'Sushi Jo',
      type: 'Complete Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kerrie_rijst_met_tonkatsu_%28gefrituurde_varkenskoteletten%29_en_salade_in_het_restaurantje_%E2%80%9EPond%E2%80%9D_in_K%C5%8Dt%C5%8D-ku%2C_-20_november_2019.jpg',
    });
    this.contentList.addContentItem({
      id: 2,
      title: 'Caesar Salad',
      description: 'Fresh mix of vegatebales, chicken and croutons',
      creator: 'Griff Cavern',
      type: 'Light Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/CaesarSalad3.jpg',
    });
    this.contentList.addContentItem({
      id: 3,
      title: 'Empanadas',
      description: 'A famous plate from Argentina, consisting in a fried dough filled with ground beef and vegetables',
      creator: 'Cristian Muller',
      type: 'Comedy/Fantasy',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Empanadas_cr.jpg',
    });
  }

  ngOnInit(){
  }
}
