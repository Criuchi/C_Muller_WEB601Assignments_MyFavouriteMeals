import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import {Content} from './helper-files/content-interface';
import { MealServiceService } from './meal-service.service';
import { AppMessagesComponent } from './app-messages/app-messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContentCardComponent, ContentListComponent, AppMessagesComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'C_Muller_MyFavoriteMeals';

  
  customContent: Content | undefined;

  constructor(private mealService: MealServiceService) {}

  ngOnInit(): void {
    
    this.getContentById(1); 
  }

  getContentById(id: number): void {
    this.mealService.getContentById(id)
    .pipe(
      tap((content: Content | undefined) => {
        this.customContent = content;
      }),
      
      catchError((error) => {
        console.error('Error fetching content by ID:', error);
        return of(null);
      })
    )

    .subscribe();
  }
}
