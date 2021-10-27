import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/shared/auth.service';
import { AppUser } from 'src/app/shared/models/app-user';
import { DeleteUserDialogComponent } from '../delete-user-dialog/delete-user-dialog.component';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'isAdmin', 'actions'];
  users$: Observable<AppUser[]>;
  user$: Observable<AppUser> = this.authService.user$;

  constructor(private http: HttpClient, private authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.users$ = this.http.get<AppUser[]>('http://127.0.0.1:3000/api/users');
  }

  makeAdmin(user: AppUser): void {
    this.users$ = this.http.patch<AppUser[]>(`http://127.0.0.1:3000/api/users/${user.email}`, { name: user.name, isAdmin: true });
  }

  removeAccess(user: AppUser): void {
    this.users$ = this.http.patch<AppUser[]>(`http://127.0.0.1:3000/api/users/${user.email}`, { name: user.name, isAdmin: false });
  }

  delete(user: AppUser): void {
    const dialogRef = this.dialog.open(DeleteUserDialogComponent, {
      width: '250px',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users$ = this.http.delete<AppUser[]>(`http://127.0.0.1:3000/api/users/${user.email}`);
      }
    });
  }
}
