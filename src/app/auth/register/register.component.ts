import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppErrorStateMatcher } from '../../shared/error-state-matcher';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
  });

  constructor(private http: HttpClient, private router: Router, private snackbar: MatSnackBar) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.invalid) {
      return;
    }
    this.http
      .post('/api/auth/register', this.registrationForm.value)
      .pipe(
        catchError(error => {
          let message = 'There was an error registering your account. Try again later or contact administration.';
          if (error.status === 409) {
            message = 'This email is already associated with an existing account.';
          }
          this.snackbar.open(message, '', {
            duration: 5000,
          });
          return EMPTY;
        })
      )
      .subscribe(response => {
        this.snackbar.open(
          'Successfully Registered. Note: You will not be able to access this system until an admin has validated your account.',
          '',
          {
            duration: 5000,
          }
        );
        this.router.navigateByUrl('/auth/login');
      });
  }
}
