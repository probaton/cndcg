export default class Card {
  grid: Square[];

  constructor() {
    this.grid = [];
    this.addSquares('0', '0', 7);
    this.addSquares('+', '-', 5);
    this.addSquares('-', '+', 5);
    this.addSquares('+', '+', 3);
    this.addSquares('+', '-', 1);
    this.addSquares('0', '-', 1);
    this.addSquares('-', '-', 1);
    this.addSquares('-', '+', 1);
    this.addSquares('-', '0', 1);
    this.shuffle();
  }

  addSquares(p1: SquareValue, p2: SquareValue, numberOfSquares: number): void {
    for (let i = numberOfSquares; i > 0; i--) {
      this.grid.push({ p1, p2, index: Math.random() });
    }
  }

  shuffle(): void {
    let squareNumber = 0;
    this.grid
      .sort((a, b) => a.index - b.index)
      .forEach(square => {
        square.index = squareNumber;
        squareNumber++;
      });
  }

  getGridByLine(): Square[][] {
    const grid = this.grid;
    const splice5 = (squares: Square[]) => squares.splice(0, 5);

    const gridByLine: Square[][] = [];
    while (grid.length > 0) {
      gridByLine.push(splice5(grid));
    }
    return gridByLine;
  }
}

type SquareValue = '+' | '-' | '0';
export type Square = { p1: SquareValue, p2: SquareValue, index: number };
