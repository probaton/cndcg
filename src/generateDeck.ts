import Card, { Square } from './Card';

export function generateDeck(numberOfCards: number): Square[][] {
  const deck: Square[][] = [];
  const stringifiedDeck: string[] = []; // Used to detect duplicates

  function newCard() {
    const card = new Card().grid;
    const stringifiedCard = JSON.stringify(card);
    if (stringifiedDeck.indexOf(stringifiedCard) != -1) {
      return newCard();
    }
    deck.push(card);
    stringifiedDeck.push(stringifiedCard);
  }

  for (let i = numberOfCards; i > 0; i--) {
    newCard();
  }
  return deck;
}

export function generateDeckByLine(numberOfCards: number): Square[][][] {
  const deck: Square[][][] = [];
  const stringifiedDeck: string[] = []; // Used to detect duplicates

  function newCard() {
    const card = new Card().getGridByLine();
    const stringifiedCard = JSON.stringify(card);
    if (stringifiedDeck.indexOf(stringifiedCard) != -1) {
      return newCard();
    }
    deck.push(card);
    stringifiedDeck.push(stringifiedCard);
  }

  for (let i = numberOfCards; i > 0; i--) {
    newCard();
  }
  return deck;
}
