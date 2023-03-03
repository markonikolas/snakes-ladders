import GameBoard from '../interfaces/GameBoard';

class Board implements GameBoard {
    public colors = [
        "lightpink",
        "pink",
        "darksalmon",
        "lightblue",
        "yellow",
        "green",
        "lightgreen",
        "cyan",
        "deepskyblue",
        "lightyellow",
    ];

    constructor(private _ctx: CanvasRenderingContext2D) { }

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    set ctx(context: CanvasRenderingContext2D) {
        this._ctx = context;
    }

    public generateGrid(): void {
        const colSize = 10;
        const rowSize = 10;
        const gridSize = rowSize * colSize;
        const squareWidth = 80;
        const squareHeight = 80;

        let colors = [...this.colors];
        let direction = false;

        let x = 0;
        let y = colSize * squareHeight;

        for (let i = 1; i <= gridSize; i++) {

            const color = Math.random() > 0.5 ? colors.shift() : colors.pop();

            if (!direction) {
                x += squareWidth;
            }

            this.ctx.fillStyle = color!;
            this.ctx.fillRect(x, y, squareWidth, squareHeight)
            this.ctx.fillStyle = 'black';
            this.ctx.font = '0.85rem sans-serif';
            this.ctx.fillText(`${i}`, x + 12, y + 20)

            if (direction) {
                x -= squareWidth;
            }

            if (x === colSize * squareWidth || x === 0) {
                direction = !direction;
                y -= squareHeight;
                colors = [...this.colors]
            }

        }
    }
}

export default Board;
