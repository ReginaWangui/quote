export class Quote {
  showQuote: boolean;

  constructor(
      public text: string,
      public author: string,
      public date: Date,
      public like: number,
      public dislike: number
      ) {
      this.showQuote = false; 
    } 
  }