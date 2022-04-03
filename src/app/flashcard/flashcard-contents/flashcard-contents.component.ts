import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebService } from '../../services/web.service';
import { APIService, Vocabulary } from '../../API.service';

@Component({
  selector: 'app-flashcard-contents',
  templateUrl: './flashcard-contents.component.html',
  styleUrls: ['./flashcard-contents.component.scss']
})
export class FlashcardContentsComponent implements OnInit {

  @Input() card: any;
@Output() answer = new EventEmitter;

  showAnswer = false;

  constructor(
    private api: APIService,
    private readonly changeDetectorRef: ChangeDetectorRef,

  ) { }

  ngOnInit(): void {
    console.log('detail', this.card);
    
  }

  flip(){
    this.showAnswer= !this.showAnswer;

  }
  setAnswer(isRight : boolean){

    // this.answer.emit({ card : this.card, isRight : isRight})

    // this.api
    // .UpdateCard({ id: this.card.id as string)
    // .then((event) => {
    //   console.log('answer updated!',isRight );
    // })
    // .catch((e) => {
    //   console.log('error updating answer...', e);
    // });
  
  }

}
