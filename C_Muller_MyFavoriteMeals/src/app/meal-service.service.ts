import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {Content} from './helper-files/content-interface';
import {contentArray} from './helper-files/contentDb'

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

  constructor() { }

  getContentArray(): Observable<Content[]> {
    return of(contentArray);
  }

  getContentById(id: number): Observable<Content | undefined> {
    return of(contentArray.find(content => content.id === id));
  }
}
