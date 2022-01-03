import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flashcard-contents',
  templateUrl: './flashcard-contents.component.html',
  styleUrls: ['./flashcard-contents.component.scss']
})
export class FlashcardContentsComponent implements OnInit {

  @Input() card: any;
@Output() answer = new EventEmitter

  showAnswer = false;

  constructor() { }

  ngOnInit(): void {
    console.log('detail'+this.card);
    
  }

  flip(){
    this.showAnswer= !this.showAnswer;

  }
  setAnswer(isRight : any){
    this.answer.emit({ card : this.card, isRight : isRight})
  }

}
