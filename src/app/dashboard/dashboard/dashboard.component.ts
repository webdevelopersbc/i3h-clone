import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { LatestDataComponent } from '../latest-data/latest-data.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user$: Observable<AppUser> = this.authService.user$;

  @ViewChild('latestData') latestData: LatestDataComponent;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  updated():void {
    this.latestData.updateData();
  }
}
