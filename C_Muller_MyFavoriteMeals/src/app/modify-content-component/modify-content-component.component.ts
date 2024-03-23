import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Content } from '../helper-files/content-interface';
import { ContentService } from '../content.service';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {
  newContent: Content = {
    title: '',
    description: '',
    creator: '',
    type: '',
    imgURL: '',
    tags: []
  };

  @Output() contentAdded = new EventEmitter<Content>(); 

  newContentArray: Content[] = [];

  constructor(private contentService: ContentService, private message: MessagesService) { }

  ngOnInit() {
    this.contentService.getContent().subscribe(content => this.newContentArray = content);
  }

  addContentToList(newContentItem: Content): void {
    console.log('Adding new content:', newContentItem);

      if (typeof newContentItem.tags === 'string') {
        newContentItem.tags = (newContentItem.tags as string).split(',');
      } else {
        newContentItem.tags = [];
      }
    
    this.contentService.addContent(newContentItem).subscribe(newContentFromServer => {
      this.newContentArray.push(newContentFromServer);
      this.contentAdded.emit(newContentFromServer); 

      console.log('Content Array after adding:', this.newContentArray);

      this.message.add(`Content "${newContentItem.title}" added successfully!`);
      this.newContent = { title: '', description: '', creator: '', type: '', imgURL: '', tags: [] };
    });
  }
}
