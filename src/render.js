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

function renderDeck(deck, parent) {
  deck.map(renderCard).forEach(cardElement => parent.appendChild(cardElement));
}

function createDivWithClass(className, parent) {
  const element = document.createElement('div');
  element.className = className;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
