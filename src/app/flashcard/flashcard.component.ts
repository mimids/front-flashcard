import { Component, Input, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';
import { APIService, Vocabulary } from '../API.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnInit {
@Input() card: any;

  constructor(public web : WebService) { }

  ngOnInit(): void {
    console.log(this.web.allCardsAnswered,this.web.cards);
    
  }

  saveAnswer(answer: any){
    this.web.saveAnswer(answer);
  }

  saveAll(){
    // this.web.saveAllAnswersToServer().subscribe(data => {
    //   console.log('All Success',data);
    //   this.web.getCards();
    // }, err => {
    //   console.log('All error',err);
    // })
  }

  reset(){
    this.web.reset().subscribe(data =>{
      console.log('reset Success',data);
      this.web.getCards();
    }, err => {
      console.error('reset Failure',err);
    })
  }

}
