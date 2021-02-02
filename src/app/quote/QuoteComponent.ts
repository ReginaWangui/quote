import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../module/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Output() myData = new EventEmitter();
  quotes: Quote[] = [
    new Quote('Be the change you wish to see in the World.', 'Mahatmam Gandhi', new Date(2021, 2, 1), 0, 0),
    new Quote('Do or Do not there is no Try.', 'Yoda', new Date(2021, 2, 1), 0, 0),
    new Quote('Dont stop untill your Proud.', 'Anonymous', new Date(2021, 2, 1), 0, 0)
  ];
  completeGoal({ isComplete, index }: { isComplete: any; index: number; }): void {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  addNewQuote(quote: Quote): void {
    const quoteLength = this.quotes.length;
    quote.date = new Date(quote.date);
    quote.id = quoteLength + 1;
    quote.like = quoteLength;
    this.quotes.push(quote);
  }
}