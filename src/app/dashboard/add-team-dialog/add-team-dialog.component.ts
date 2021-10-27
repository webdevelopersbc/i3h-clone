import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppErrorStateMatcher } from 'src/app/shared/error-state-matcher';
import { Club } from '../../shared/models/club';
import { ClubSearchResult } from '../../shared/models/club-search-result';

@Component({
  selector: 'app-add-team-dialog',
  templateUrl: './add-team-dialog.component.html',
  styleUrls: ['./add-team-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTeamDialogComponent implements OnInit {
  displayedColumns: string[] = ['crest', 'name', 'division', 'points', 'wins', 'loses', 'otl'];
  matcher = new AppErrorStateMatcher();
  searchForm = new FormGroup({
    search: new FormControl('', [Validators.required]),
    platform: new FormControl('xboxone', [Validators.required]),
  });
  clubs$ = new BehaviorSubject<ClubSearchResult[]>(null);
  loading = false;
  clubsAdded: number[] = [];
  clubDetails: { [key: number]: ClubSearchResult } = {};

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private dialogRef: MatDialogRef<AddTeamDialogComponent>
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.searchForm.invalid) {
      return;
    }

    this.loading = true;
    this.clubsAdded = [];
    this.http
      .post<{ [key: string]: ClubSearchResult }>('api/nhlapi', this.searchForm.value)
      .pipe(
        map(clubMap => Object.keys(clubMap).map(key => clubMap[key])),
        catchError(error => {
          this.snackbar.open('There was an error searching the API. Please consult the errors log', '', {
            duration: 5000,
          });
          return EMPTY;
        })
      )
      .subscribe(clubs => {
        this.clubs$.next(clubs);
        this.clubDetails = clubs.reduce((agg, club) => ({ ...agg, [club.clubInfo.clubId]: club }), {});
        this.loading = false;
      });
  }

  toggleClub(club: ClubSearchResult): void {
    if (this.clubsAdded.includes(club.clubInfo.clubId)) {
      this.clubsAdded = this.clubsAdded.filter(id => id !== club.clubInfo.clubId);
      return;
    }

    this.clubsAdded = [...this.clubsAdded, club.clubInfo.clubId];
  }

  addTeams(): void {
    const clubsPayload: Club[] = this.clubsAdded
      .map(id => this.clubDetails[id])
      .map(club => {
        return {
          clubId: club.clubInfo.clubId,
          platform: this.searchForm.get('platform').value,
          name: club.name,
          regionId: club.clubInfo.regionId,
          teamId: club.clubInfo.teamId,
          customKit: club.clubInfo.customKit,
        };
      });

    this.http
      .post<Club[]>('http://127.0.0.1:3000/api/teams', { teams: clubsPayload })
      .pipe(
        catchError(error => {
          console.log(error);
          this.snackbar.open('There was an error adding teams to the API. Please consult the errors log', '', {
            duration: 5000,
          });
          return EMPTY;
        })
      )
      .subscribe(allTeams => {
        this.dialogRef.close(allTeams);
      });
  }
}
