import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../shared/shared.module';
import { AddTeamDialogComponent } from './add-team-dialog/add-team-dialog.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteTeamDialogComponent } from './delete-team-dialog/delete-team-dialog.component';
import { DeleteUserDialogComponent } from './delete-user-dialog/delete-user-dialog.component';
import { LatestDataComponent } from './latest-data/latest-data.component';
import { TeamManagementComponent } from './team-management/team-management.component';
import { UpdatesManagementComponent } from './updates-management/updates-management.component';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  declarations: [
    DashboardComponent,
    UserManagementComponent,
    TeamManagementComponent,
    DeleteUserDialogComponent,
    AddTeamDialogComponent,
    DeleteTeamDialogComponent,
    UpdatesManagementComponent,
    LatestDataComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    MatExpansionModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    DashboardRoutingModule,
  ],
  entryComponents: [DeleteUserDialogComponent, AddTeamDialogComponent, DeleteTeamDialogComponent],
})
export class DashboardModule {}
