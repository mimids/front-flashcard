import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { APIService, Vocabulary } from '../API.service';
import { SnackbarService } from '../services/snackbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'aws-amplify-api-with-angular';


  constructor(
    private api: APIService,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly snackbarService: SnackbarService
  ) {

  }
ngOnInit(): void {
  
}
ngOnDestroy(): void {
  
}
 
}
