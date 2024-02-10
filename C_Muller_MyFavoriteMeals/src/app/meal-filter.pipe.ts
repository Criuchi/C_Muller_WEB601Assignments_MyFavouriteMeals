import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'mealFilter',
  standalone: true
})
export class MealFilterPipe implements PipeTransform {

  transform(value: Content [], type: string): Content[] {
    if (!value){
      return [];
    }

    if(!type){
      return value.filter(contentItem => !contentItem.type);
    }

    return value.filter(contentItem => contentItem.type === type);
  }

}
