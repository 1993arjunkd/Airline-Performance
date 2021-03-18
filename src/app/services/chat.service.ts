import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class ChatService {
    constructor(private db: AngularFireDatabase) { }

    public fetchBotMessage(message: string) {
        return this.db.object('chat/' + message.toLocaleLowerCase()).valueChanges();
    }
}
