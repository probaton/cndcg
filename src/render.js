function parseDisplayClass(squareValue) {
  switch (squareValue) {
    case '+': return 'good';
    case '-': return 'assassin';
    case '0': return 'neutral';
  }
}

function renderCardLine(cardFace, squares, displayProp) {
  squares.forEach(square => createDivWithClass(`square ${parseDisplayClass(square[displayProp])}`, cardFace));
}

function renderCard(card) {
  const cardElement = createDivWithClass('card');
  const p1FaceElement = createDivWithClass('p1 card-face', cardElement);
  const p2FaceElement = createDivWithClass('p2 card-face', cardElement);

  card.forEach(line => {
    renderCardLine(p1FaceElement, line, 'p1');
    line.reverse();
    renderCardLine(p2FaceElement, line, 'p2');
  });

  return cardElement;
}

function splitCardsIntoPages(cardElements) {
  const pages = [];
  while(cardElements.length > 0) {
    const page = createDivWithClass('card-page');
    for (let i = 0; i < 10; i++) {
      page.appendChild(cardElements.pop());
    }
    pages.push(page);
  }
  return pages;
}

function renderDeck(deck, parent) {
  const cardElements = deck.map(renderCard);
  splitCardsIntoPages(cardElements).forEach(page => parent.appendChild(page));
}

function createDivWithClass(className, parent) {
  const element = document.createElement('div');
  element.className = className;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
