import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    user: any = JSON.parse(localStorage.getItem('user'));

    constructor(private db: AngularFireDatabase) { }

    public fetchProfileDetails() {       
        return this.db.object('users/' + this.user.uid).valueChanges();
    }

    public fetchProfileName() {
        return this.db.object('users/' + this.user.uid + '/name').valueChanges();
    }
}
