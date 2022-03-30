import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotUserGuard } from '../core/guard/not-user.guard';
import { UserGuard } from '../core/guard/user.guard';
import { SharedModule } from '../shard/shard.module';

import { AuthComponent } from './auth.component';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: AuthComponent },
 
];

@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),    AmplifyAuthenticatorModule,
    ReactiveFormsModule, SharedModule],

})
export class AuthModule {}
