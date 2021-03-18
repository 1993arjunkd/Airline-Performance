import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.services';

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

    public email: string;
    public password: string;
    public loginFailed: boolean = false;

    constructor(private router: Router, private loginService: LoginService) {
    }

    public ngOnInit(): void {
        if(localStorage.getItem('user')!= null){
            this.router.navigate(['/home']);
        }
    }

    public login(): void {
        this.loginService.checkCredentials(this.email, this.password).then(res => {
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(['/home']);
        }).catch(() => { this.loginFailed = true });
    }

    public googleLogin(): void {
        this.loginService.signInWithGoogle().then(res => {
            localStorage.setItem('user', JSON.stringify(res.user));
            this.router.navigate(['/home']);
        }).catch(() => { this.loginFailed = true });
    }
}
