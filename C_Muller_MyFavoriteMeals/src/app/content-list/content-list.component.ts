import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, RouterOutlet],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {
  contentArray: Content[] = [
    {
      id: 1,
      title: 'Tonkatsu',
      description: 'Famous Japanese meal which consists of breaded pork, rice and vegetables',
      creator: 'Sushi Jo',
      type: 'Complete Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kerrie_rijst_met_tonkatsu_%28gefrituurde_varkenskoteletten%29_en_salade_in_het_restaurantje_%E2%80%9EPond%E2%80%9D_in_K%C5%8Dt%C5%8D-ku%2C_-20_november_2019.jpg',
      tags: ['Japanese ', 'Tasty ', 'Healthy'],
    },
    {
      id: 2,
      title: 'Caesar Salad',
      description: 'Fresh mix of vegatebales, chicken and croutons',
      creator: 'Griff Cavern',
      type: 'Light Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/CaesarSalad3.jpg',
      tags: ['Light ', 'Salad ', 'Healthy'],
    },
    {
      id: 3, 
      title: 'Empanadas',
      description: 'A famous plate from Argentina, consisting in a fried dough filled with ground beef and vegetables',
      creator: 'Cristian Muller',
      type: 'Soup',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Empanadas_cr.jpg',
      tags: ['Argentinian ', 'Tasty ', 'Fried'],
    },
    {
      id: 4, 
      title: 'Ramen',
      description: 'pork, eggs and vegetables cooked in a broth',
      creator: 'Trinity Scott',
      type: 'Complete Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Hachioji.jpg',
      tags: ['Japanese ', 'Tasty ', 'Healthy'],
    },
    {
      id: 5,
      title: 'Fish Tacos',
      description: 'Tacos with a new addition of fried fish',
      creator: 'Monica Galindo',
      type: 'Complete Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Tacos_de_pescado_Ensenada..jpg',
      tags: ['Mexican ', 'Tasty ', 'Delicious'],
    },
    {
      id: 6, 
      title: 'Gnocci',
      description: 'Home made gnocci along with a delicious tomato sauce',
      creator: 'Andrea Sisto',
      type: 'Complete Meal',
      imgURL: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Kerrie_rijst_met_tonkatsu_%28gefrituurde_varkenskoteletten%29_en_salade_in_het_restaurantje_%E2%80%9EPond%E2%80%9D_in_K%C5%8Dt%C5%8D-ku%2C_-20_november_2019.jpg',
      tags: ['Italian ', 'Tasty ', 'Healthy'],
    },

  ]

  constructor() {
     
  }
}
