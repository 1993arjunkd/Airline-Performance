import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
    providedIn: 'root'
})
export class AnalyticsService {

    constructor(private db: AngularFireDatabase) { }

    public fetchAnalyticsData() {       
        return this.db.list('analytics').valueChanges();
    }
}
