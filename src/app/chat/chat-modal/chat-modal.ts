import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'chat-modal',
  templateUrl: './chat-modal.html',
  styleUrls: ['./chat-modal.css']
})
export class ChatModalComponent implements OnInit {
  public messages = [];
  public userMessage: string;
  public defaultMessage: string = 'Sorry, I dont know that!';
  public user: any = JSON.parse(localStorage.getItem('user'));

  constructor(private db: AngularFireDatabase, private profileService: ProfileService, private chatService: ChatService) {
  }

  ngOnInit() {
  }

  sendMessage(): void {
    if (this.userMessage) {
      this.addUserMessage(this.userMessage);
      this.chatService.fetchBotMessage(this.userMessage).subscribe(botMessage => {
        if (botMessage) {
          this.addBotMessage(botMessage);
        } else {
          this.addBotMessage(this.defaultMessage);
        }
        this.userMessage = '';
      });
    }
  }

  addUserMessage(text) {
    this.messages.unshift({
      text,
      sender: 'user'
    });
  }

  addBotMessage(text) {
    this.profileService.fetchProfileName().subscribe((name: string) => {
      const displayName = name ? name : this.user.displayName;
      text = text.replace('[USERNAME]', displayName ); 
      this.messages.unshift({
        text,
        sender: 'bot',
      });
   });   
  }
}
