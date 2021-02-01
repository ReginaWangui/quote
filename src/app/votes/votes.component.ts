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

  @Input()
  quote!: Quote;
  @Output() Upvote = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  likeClick() {
    this.Upvote.emit(this.numberOfLikes);
    this.numberOfLikes++;
  }

  dislikeClick() {
    this.numberOfDislikes++;
  }

}
