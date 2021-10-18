import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Club } from 'src/app/shared/models/club';
import { AddTeamDialogComponent } from '../add-team-dialog/add-team-dialog.component';
import { DeleteTeamDialogComponent } from '../delete-team-dialog/delete-team-dialog.component';

@Component({
  selector: 'app-team-management',
  templateUrl: './team-management.component.html',
  styleUrls: ['./team-management.component.scss'],
})
export class TeamManagementComponent implements OnInit {
  displayedColumns: string[] = ['crest', 'name', 'actions'];
  clubs$ = new BehaviorSubject<Club[]>([]);

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.http.get<Club[]>('/api/teams').subscribe(teams => {
      this.clubs$.next(teams);
    });
  }

  addTeam(): void {
    const dialogRef = this.dialog.open(AddTeamDialogComponent, {
      minHeight: 450,
      minWidth: 800,
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.clubs$.next(result);
      }
    });
  }

  deleteClub(club: Club): void {
    const dialogRef = this.dialog.open(DeleteTeamDialogComponent, {
      width: '250px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete<Club[]>(`/api/teams/${club.clubId}`).subscribe(teams => this.clubs$.next(teams));
      }
    });
  }
}
