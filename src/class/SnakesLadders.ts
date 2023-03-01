import Board from "./components/Board";
import GameBoard from './interface/GameBoard';

class SnakesLadders implements GameBoard {
    constructor(private _board: Board) { }

    get board(): Board {
        return this._board;
    }

    set board(board: Board) {
        this._board = board;
    }

    public start() { }
}

export default SnakesLadders;
