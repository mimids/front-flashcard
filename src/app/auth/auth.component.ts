import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { environment } from '../../environments/environment';

// from here for aws api
import Amplify from 'aws-amplify';
import amplify from '../../aws-exports';
import { Auth } from '@aws-amplify/auth'

import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';

Auth.configure(amplify);

// until here for aws api
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit,OnDestroy {
  errorMessage = '';
  isUsableWithoutApi = environment.apiUrl === '';
  user: CognitoUserInterface | undefined;
  authState: AuthState | undefined;

  

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef,
    private zone:NgZone
  ) {

  }

  ngOnInit(): void {
    
    
  }


  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
