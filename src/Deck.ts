export default class Deck {
  cards: Card[];

  constructor() {
    this.cards = [];
  }

  build(): Card[] {
    if (this.cards && this.cards.length == 25) {
      return this.cards;
    }

    this.addCards('0', '0', 7);
    this.addCards('+', '-', 5);
    this.addCards('-', '+', 5);
    this.addCards('+', '+', 3);
    this.addCards('+', '-', 1);
    this.addCards('0', '-', 1);
    this.addCards('-', '-', 1);
    this.addCards('-', '+', 1);
    this.addCards('-', '0', 1);
    this.shuffle();

    if (this.cards.length != 25) {
      throw new Error(`Wrong number of cards ${this.cards.length}`);
    }
    return this.cards;
  }

  shuffle(): void {
    let cardNumber = 0;
    this.cards
      .sort((a, b) => a.index - b.index)
      .forEach(card => {
        card.index = cardNumber;
        cardNumber++;
      });
  }

  addCards(p1: CardValue, p2: CardValue, numberOfCards: number) {
    const newCards = this.generateCards(p1, p2, numberOfCards);
    this.cards = this.cards.concat(newCards);
  }

  generateCards(p1: CardValue, p2: CardValue, numberOfCards: number): Card[] {
    const cards: Card[] = [];
    for (let i = numberOfCards; i > 0; i--) {
      cards.push({ p1, p2, index: Math.random() });
    }
    return cards;
  }
}

type CardValue = '+' | '-' | '0';
type Card = { p1: CardValue, p2: CardValue, index: number };
