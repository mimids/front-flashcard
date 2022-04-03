import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Answer, APIService, Vocabulary } from '../API.service';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  cards: Vocabulary[] = [];
  error: any = null;
  answers: Answer[] = [];

  constructor(
    private api: APIService,
    public web: WebService,
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // console.log(this.web.allCardsAnswered,this.web.cards);
  this.getCards(undefined,10);
    
  }

  async getCards(filter = undefined, limit: number) {
    this.api.ListVocabularies(filter, limit).then((event) => {

      this.cards = event.items as Vocabulary[]
      console.log('cards',this.cards);
      
    });

  }

  saveAnswer(answer: any) {
    console.log('event', answer);

    this.answers = [...this.answers, answer];
  }

  get allCardsAnswered() {
    return this.answers.length === this.cards.length;
  }

  saveAllAnswersToServer() {
    // this.api.ListVocabularies(undefined, 10).then((event) => {
    //   this.cards = event.items as Vocabulary[];
    //   this.cards.forEach(value=>{
    //     console.log('value',value);
    //     // this.createAnswer(value, true);
    //   })
    // });
  }

  createAnswer(card: Vocabulary, isRight: boolean) {
  //   this.api
  //     .CreateAnswer({ vocabulalyID: card.id as string, isRight: isRight , categoryID: card.categoryID})
  //     .then((event) => {
  //       console.log('answer created!');
  //     })
  //     .catch((e) => {
  //       console.log('error creating answer...', e);
  //     });
   }
  updateAnswer(data: Vocabulary, isRight: boolean) {
    // this.api
    //   .UpdateAnswer({ vocabularyID: data.id as string, isRight: isRight })
    //   .then((event) => {
    //     console.log('answer updated!');
    //   })
    //   .catch((e) => {
    //     console.log('error updating answer...', e);
    //   });
  }
  deleteAnswer(data: Vocabulary) {
    this.api
      .DeleteCard({ id: data.id as string })
      .then((event) => {
        console.log('answer deleted!');
      })
      .catch((e) => {
        console.log('error deleting answer...', e);
      });
  }

}
