# Codenames Duet Card Generator
Generates a set of key cards for use with Codenames Duet. Each card is randomly generated and unique to the set.  

> :warning: **Disclaimer:** I wrote this because the key cards that came with our copy of Codename Duet experienced an acute case of death by coffee (and maybe also because it was a fun little puzzle to solve.) I published it with the intention of helping other people in a similar predicament and _not_ to scam the creators of this wonderful game out of income. If those same creators would prefer I take this offline please do not hesitate to contact me so I can do so.

## How to use
Install.
```
npm install
```
Generate values for fifty unique random cards to a JSON file.
```
npm run save-deck
```
Open `src/index.html` in a browser for a print-ready version of the cards. The cards are designed to be printed single-sided and folded over the center line to make the card faces match up. 

![Fold here](./assets/cardFoldingExample.png)