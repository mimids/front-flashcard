import { ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';
import { APIService, Vocabulary } from '../API.service';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
@Input() card: any;
allCardsAnswered=false;
cards:Vocabulary[]=[];

  constructor(private api: APIService,
    private readonly changeDetectorRef: ChangeDetectorRef,

    ) { }

  ngOnInit(): void {

    // console.log(this.web.allCardsAnswered,this.web.cards);
    this.api.ListVocabularies(undefined, 10).then((event) => {
      this.cards = event.items as Vocabulary[];
      this.changeDetectorRef.detectChanges();
      // 
    });
    }
    
    
    saveAll(){
    
  }


  saveAnswer(answer: any) {
    console.log('event ddd', answer);
// this.web.saveAnswer(answer);
  }


  reset(){
    // this.cards.forEach((card)=>{
    //   this.api
    //   .UpdateAnswer({ id: card.id as string, isRight: false })
    //   .then((event) => {
    //     console.log('answer updated!',false );
    //   })
    //   .catch((e) => {
    //     console.log('error updating answer...', e);
    //   });
    // })
  }


  delete(){
    this.cards.forEach((card)=>{
    this.api
    .DeleteCard({ id: card.id as string })
    .then((event) => {
      console.log('answer deleted!');
    })
    .catch((e) => {
      console.log('error deleting answer...', e);
    });
  
    })
  }

  cleateAll(){

    // this.cards.forEach((card=>{
    //     console.log('card',card);
        
    //     this.api
    //     .CreateAnswer({ vocabularyID: card.id as string , isRight: false })
    //     .then((event) => {
    //       console.log('answer created!');
    //     })
    //     .catch((e) => {
    //       console.log('error creating answer...', e);
    //     });
    //   }))

  }

}
