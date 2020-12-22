function renderCardLine(cardFace, squares, displayProp) {
  squares.forEach(square => {
    const squareElement = createDivWithClass('square', cardFace);
    squareElement.innerText = square[displayProp];
  });
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

function createDivWithClass(className, parent) {
  const element = document.createElement('div');
  element.className = className;
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
