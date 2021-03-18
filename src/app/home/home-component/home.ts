import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics.service';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit {

  public analyticsData: any;

  constructor(private router: Router, private analyticsService: AnalyticsService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') == null) {
      this.router.navigate(['/login']);
    }
    this.analyticsService.fetchAnalyticsData().subscribe(data =>{
      this.analyticsData = data;
    });
  }
}
