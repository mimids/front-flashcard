import {   ChangeDetectionStrategy,ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { APIService, Category } from '../../API.service';
import { SnackbarService } from '../../services/snackbar.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryComponent implements OnInit {

  public createForm: FormGroup;
  public datas: Array<Category> = [];
  private subscription: Subscription | null = null;

  constructor(
    private api: APIService,
    private fb: FormBuilder,
    private readonly changeDetectorRef: ChangeDetectorRef,
    private readonly snackbarService: SnackbarService
  ) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],

    });
  }

  async ngOnInit() {
    this.api.ListCategories(undefined, 10).then((event) => {
      this.datas = event.items as Category[];
      this.changeDetectorRef.detectChanges();
    });

    this.subscription = <Subscription>(
      this.api.OnCreateVocabularyListener.subscribe((event: any) => {
        const newData = event.value.data.OnCreateVocabulary;
        this.datas = [newData, ...this.datas];
      })
    );
  }

  public onCreate(data: Category) {
    this.api
      .CreateCategory(data)
      .then((event) => {
        console.log('item created!');
        this.snackbarService.open('item created!', 'primary'),
        this.changeDetectorRef.detectChanges();
          this.createForm.reset();
      })
      .catch((e) => {
        this.snackbarService.open('error creating data...', 'warn'),
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
