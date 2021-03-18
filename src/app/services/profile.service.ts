import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private db: AngularFireDatabase) { }

    public fetchProfileDetails() {
        const user: any = JSON.parse(localStorage.getItem('user'));       
        return this.db.object('users/' + user.uid).valueChanges();
    }

    public fetchProfileName() {
        const user: any = JSON.parse(localStorage.getItem('user'));       
        return this.db.object('users/' + user.uid + '/name').valueChanges();
    }
}
