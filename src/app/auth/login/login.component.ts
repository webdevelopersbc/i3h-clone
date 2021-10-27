import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppErrorStateMatcher } from 'src/app/shared/error-state-matcher';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  matcher = new AppErrorStateMatcher();
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }

    this.http
      .post('http://127.0.0.1:3000/api/auth/login', this.loginForm.value)
      .pipe(
        catchError(error => {
          this.snackbar.open(
            'There was an error signing you in. Check your credentials or await admin validation.',
            '',
            {
              duration: 5000,
            }
          );
          return EMPTY;
        })
      )
      .subscribe((response: { access_token: string }) => {
        this.authService.signIn(response);
        this.router.navigateByUrl('/dashboard');
      });
  }
}
