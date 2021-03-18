import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(public fireBaseAuth: AngularFireAuth) { }

    public checkCredentials(email: string, password: string) {
        return this.fireBaseAuth.auth.signInWithEmailAndPassword(email, password);
    }

    public signInWithGoogle() {
        return this.fireBaseAuth.auth.signInWithPopup(new auth.GoogleAuthProvider)
    } 

    public signOut(): void {
        this.fireBaseAuth.auth.signOut()
        localStorage.removeItem('user');
    }
}
