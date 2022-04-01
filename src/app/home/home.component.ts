import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  public createForm: FormGroup;
  public datas: Array<Vocabulary> = [];
  private subscription: Subscription | null = null;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly snackbarService: SnackbarService
  ) {
    this.createForm = this.fb.group({
      word: ['', Validators.required],
      meaning: ['', Validators.required],
      lang_word: ['', Validators.required],
      lang_meaning: ['', Validators.required],
    });
  }

  async ngOnInit() {
    this.api.ListVocabularies(undefined, 10).then((event) => {
      this.datas = event.items as Vocabulary[];
      this.changeDetectorRef.detectChanges();
    });

    this.subscription = <Subscription>(
      this.api.OnCreateVocabularyListener.subscribe((event: any) => {
        const newData = event.value.data.OnCreateVocabulary;
        this.datas = [newData, ...this.datas];
      })
    );
  }

  public onCreate(data: Vocabulary) {
    this.api
      .CreateVocabulary(data)
      .then((event) => {
        console.log('item created!');
        this.snackbarService.open('item created!', 'warn'),
          this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating data...', e);
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
