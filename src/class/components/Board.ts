import CanvasRenderingContext from '../interface/CanvasRenderingContext';

class Board implements CanvasRenderingContext {
    public colors = [
        "amber",
        "pink",
        "rose",
        "teal",
        "yellow",
        "blue",
        "red",
        "green",
        "pink",
        "cyan",
        "indigo",
        "violet",
    ];

    constructor(private _ctx: CanvasRenderingContext2D) { }

    get ctx(): CanvasRenderingContext2D {
        return this._ctx;
    }

    set ctx(context: CanvasRenderingContext2D) {
        this._ctx = context;
    }
}

export default Board;
