import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import {Quote} from '../module/quote'

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfLikes = 0;
  numberOfDislikes = 0;

  @Input()quote!: Quote;
  @Output()isComplete = new EventEmitter<boolean>();
  @Output()isRead = new EventEmitter<boolean>();
  @Output() Upvote = new EventEmitter();
  delete: any;

quoteComplete(isComplete:boolean){
  this.isComplete.emit(isComplete);
}

  likeClick() {
    this.Upvote.emit(this.numberOfLikes);
    this.numberOfLikes+=1;
  }

  dislikeClick() {
    this.numberOfDislikes+=1;
  }

  voteIsCompletetrue(){
    this.delete;
  }

constructor(){}
ngOnInit(): void
{}
}

