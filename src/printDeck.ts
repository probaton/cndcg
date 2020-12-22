import { generateDeckByLine } from './generateDeck';

const decks = generateDeckByLine(50);
console.log(JSON.stringify(decks, undefined, 2));
