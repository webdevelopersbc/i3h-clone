import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../shared/guards/logged-in.guard';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        canActivateChild: [LoggedInGuard],
        children: [
          { path: 'login', component: LoginComponent, data: { animation: 'login' } },
          { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
          { path: '', pathMatch: 'full', redirectTo: 'login' },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
