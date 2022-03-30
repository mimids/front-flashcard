import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from '../core/guard/not-user.guard';
import { UserGuard } from '../core/guard/user.guard';
import { SharedModule } from '../shard/shard.module';

import { AuthComponent } from './auth.component';
import { ConfirmEmailDialogComponent } from './confirm-email-dialog/confirm-email-dialog.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ForgotPasswordDialogComponent } from './forgot-password-dialog/forgot-password-dialog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ReactiveFormsModule } from '@angular/forms';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';

const routes: Routes = [
  { path: '', component: AuthComponent, canActivate: [NotUserGuard] },
  {
    path: 'confirm-email',
    component: ConfirmEmailComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'confirm-email/:token',
    component: ConfirmEmailComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [NotUserGuard],
  },
  {
    path: 'reset-password/:id/:token',
    component: ResetPasswordComponent,
  },
];

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    RegisterFormComponent,
    ConfirmEmailDialogComponent,
    ConfirmEmailComponent,
    ForgotPasswordComponent,
    ForgotPasswordDialogComponent,
    ResetPasswordComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),    AmplifyAuthenticatorModule,
    ReactiveFormsModule, SharedModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class AuthModule {}
