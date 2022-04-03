import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { APIService, Vocabulary } from '../API.service';
@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss'],
})
export class FlashcardListComponent implements OnInit {
  datas : Vocabulary[]  = [];

  constructor(
    private api: APIService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

   ngOnInit() {
    this.api.ListVocabularies().then((event) => {
   this.datas = event.items as Vocabulary[];
   this.changeDetectorRef.detectChanges();

    });

    
  }

  
}
