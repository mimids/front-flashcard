import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AuthComponent }];

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
