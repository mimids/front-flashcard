import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { APIService,Vocabulary } from '../API.service';
@Component({
  selector: 'app-flashcard-list',
  templateUrl: './flashcard-list.component.html',
  styleUrls: ['./flashcard-list.component.scss']
})
export class FlashcardListComponent implements OnInit {
public datas: Array<Vocabulary> = [];

  constructor(private api: APIService, public web : WebService,    private readonly changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    this.api.ListVocabularies().then(event => {
      this.datas = event.items as Vocabulary[];
      this.changeDetectorRef.detectChanges();
    });
    
  }

  

}
