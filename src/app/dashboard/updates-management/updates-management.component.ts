import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-updates-management',
  templateUrl: './updates-management.component.html',
  styleUrls: ['./updates-management.component.scss'],
})
export class UpdatesManagementComponent implements OnInit {
  @Output() updated = new EventEmitter<void>();

  dayTimes = Array.from({ length: 24 }, (val, index) => {
    return `${index === 0 || index === 12 ? 12 : index % 12}:00${index < 12 ? 'AM' : 'PM'}`;
  });
  timeOfDaySelected = '10:00PM';
  timeZones = Array.from({ length: 4 }, (val, index) => {
    switch (index) {
      case 0:
        return 'Pacific';
      case 1:
        return 'Mountain';
      case 2:
        return 'Central';
      case 3:
        return 'Eastern';
    }
  });
  timeZoneSelected = 'Eastern';
  loadedSettings = {
    timeOfDay: '',
    timeZone: '',
  };
  updating = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ timeOfDay: string; timeZone: string }>(`http://127.0.0.1:3000/api/settings`).subscribe(settings => {
      this.timeOfDaySelected = settings.timeOfDay;
      this.timeZoneSelected = settings.timeZone;
      this.loadedSettings = {
        timeOfDay: settings.timeOfDay,
        timeZone: settings.timeZone,
      };
    });
  }

  saveSettings(): void {
    this.http
      .post<{ timeOfDay: string; timeZone: string }>(`http://127.0.0.1:3000/api/settings`, {
        timeOfDay: this.timeOfDaySelected,
        timeZone: this.timeZoneSelected,
      })
      .subscribe(settings => {
        this.timeOfDaySelected = settings.timeOfDay;
        this.timeZoneSelected = settings.timeZone;
        this.loadedSettings = {
          timeOfDay: settings.timeOfDay,
          timeZone: settings.timeZone,
        };
      });
  }

  update(): void {
    this.updating = true;
    this.http.get<void>('http://127.0.0.1:3000/api/nhlapi/update').subscribe(() => {
      this.updating = false;
      this.updated.emit();
    });
  }
}
