import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.services';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'top-panel',
  templateUrl: './top-panel.html',
  styleUrls: ['./top-panel.css']
})
export class TopPanelComponent implements OnInit {
  
  public isHome: boolean;
  public displayName: string;
  private user: any = JSON.parse(localStorage.getItem('user'));

  constructor(private loginService: LoginService, private profileService: ProfileService, private router: Router) {
  }

  ngOnInit() {
    this.isHome = this.router.url === '/home' ? true: false;
    this.fetchDisplayName();
  }

  public fetchDisplayName(): void {
    this.profileService.fetchProfileName().subscribe(name=> {
       this.displayName = name ? name : this.user.displayName;
    });
  }

  public navToProfile(): void {
    this.router.navigate(['home/profile']);
  }

  public navToHome(): void {
    this.router.navigate(['home']);
  }
  
  public logOut(): void {
    this.loginService.signOut();
    this.router.navigate(['/login']);
  }
}
