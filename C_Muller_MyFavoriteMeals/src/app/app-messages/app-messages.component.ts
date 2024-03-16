import { Component } from '@angular/core';
import { MessagesService } from '../messages.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-messages',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.scss'
})
export class AppMessagesComponent {
  messages: string[] = [];

  constructor(public messagesService : MessagesService) {}
}
