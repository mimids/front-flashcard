import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { environment } from '../../environments/environment';

// from here for aws api
import Amplify from 'aws-amplify';
import amplify from '../../aws-exports';

import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


// until here for aws api
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  errorMessage = '';
  isUsableWithoutApi = environment.apiUrl === '';
  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;

  constructor(
    private readonly ref: ChangeDetectorRef,
  
  ) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
  }
}
