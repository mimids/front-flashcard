import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService, Vocabulary} from '../API.service';

@Injectable({
  providedIn: 'root',
})
export class WebService {
  private BASE_URL = 'http://localhost:3000';
  cards: Array<any> = [];
  error: any = null;
  answers: Array<any> = [];

  constructor(private http: HttpClient, private api: APIService) {
    this.getCards();
  }

  getCards() {
    this.api.ListVocabularies(undefined, 10).then((event) => {
      this.cards = event.items as Vocabulary[];
    });

    
  }

  saveAnswer(answer: any) {
    this.answers = [...this.answers, answer];
  }

  get allCardsAnswered() {
    return this.answers.length === this.cards.length;
  }

  saveAllAnswersToServer() {
  }

  reset() {
    return this.http.post<{ reset: true }>(`${this.BASE_URL}/cards/reset`, {
      reset: true,
    });
  }
}
