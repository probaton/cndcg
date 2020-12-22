function renderCard(card) {
  const container = document.createElement('div');
  container.className = 'card';

  card.forEach(square => {
    const squareElement = document.createElement('div');
    squareElement.className = 'square';
    squareElement.innerText = square.p1;
    container.appendChild(squareElement);
  });

  return container;
}
