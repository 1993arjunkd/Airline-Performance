import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatModule } from '../chat/chat.module';
import { AnalyticsService } from '../services/analytics.service';
import { ProfileService } from '../services/profile.service';
import { AnalyticsComponent } from './analytics-component/analytics';
import { HomeComponent } from './home-component/home';
import { HomeRoutingModule } from './home-routing.module';
import { ProfileComponent } from './profile/profile';
import { TopPanelComponent } from './top-panel/top-panel';

@NgModule({
  declarations: [HomeComponent, ProfileComponent, TopPanelComponent, AnalyticsComponent],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    ChatModule
  ],
  exports: [],
  providers:[ProfileService, AnalyticsService]
})
export class HomeModule { }