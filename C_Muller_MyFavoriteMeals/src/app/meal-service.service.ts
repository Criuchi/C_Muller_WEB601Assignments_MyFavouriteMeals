import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb'
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class MealServiceService {
/*   getContentArray() {
    throw new Error('Method not implemented.');
  }
  getContentById(id: number) {
    throw new Error('Method not implemented.');
  } */

  constructor(private messagesService : MessagesService) { }

  getContentArray(): Observable<Content[]> {
    this.messagesService.add('Content array loaded.')
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    const content =(contentArray.find(content => content.id === id));

    this.messagesService.add(`Content Item at ID: ${id}`);
    return of(content);
  }
}
