import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Quote  } from '../module/quote'


@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
newQuote = new Quote ('', '' , new Date() , 0, 0)

  @Output() addQuote = new EventEmitter<Quote>()  

  addAnotherQuote(){
    this.addQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
