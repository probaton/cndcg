import fs from 'fs';
import generateDeck from './generateDeck';

const path = './dist';
const fileName = `${path}/deck.js`;
const deckString = JSON.stringify(generateDeck(50), undefined, 2);

!fs.existsSync(path) && fs.mkdirSync(path);
fs.writeFileSync(fileName, `const deck = ${deckString}`);
console.log(`Deck successfully saved in ${fileName}`);
