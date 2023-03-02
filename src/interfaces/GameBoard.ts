interface GameBoard {

    get ctx(): CanvasRenderingContext2D;

    set ctx(context: CanvasRenderingContext2D);

    generateGrid(): void;

}

export default GameBoard;