import { NgModule, CUSTOM_ELEMENTS_SCHEMA,  NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
// from here for aws api
import Amplify from 'aws-amplify';
import amplify from '../aws-exports';
 
 
Amplify.configure(amplify);
// until here for aws api


export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'flashcard',
    loadChildren: () =>
      import('./flashcard-list/flashcard-list.module').then((m) => m.FlashcardListModule),
  },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    CoreModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' },
    ),

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
  
})
export class AppModule { }
