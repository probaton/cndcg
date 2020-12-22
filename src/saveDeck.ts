import fs from 'fs';
import { generateDeckByLine } from './generateDeck';

const path = './dist';
const fileName = `${path}/deck.js`;
const deckString = JSON.stringify(generateDeckByLine(50), undefined, 2);

!fs.existsSync(path) && fs.mkdirSync(path);
fs.writeFileSync(fileName, `const deck = ${deckString}`);
console.log(`Deck successfully saved in ${fileName}`);
