import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class ProfileComponent implements OnInit {

  public profileDetails: any;

  constructor(private router: Router, private profileService: ProfileService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/login']);
    }

    this.getProfileDetails();
  }

  public getProfileDetails(): void {
      const user: any = JSON.parse(localStorage.getItem('user'));
      this.profileService.fetchProfileDetails().subscribe((profileDetails: any) => {
        this.profileDetails = profileDetails;
        if(!this.profileDetails) {
          this.profileDetails = {
            name: user.displayName,
            email: user.email,
            imgUrl: user.photoURL
          }
        }
      });
  }
}
