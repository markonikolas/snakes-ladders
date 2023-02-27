import Board from './components/Board';
import { IGameOpts } from './interfaces/Game';

class SnakesLadders {
    private readonly _board: Board;
    private readonly _players;

    constructor(board: Board, opts: IGameOpts) {
        this._board = board;
        this._players = opts.players;
    }

    get board() {
        return this._board;
    }

    private removeStartScreen() {
        const startScreen = document.getElementById('start-screen');
        const indicator = document.getElementById('indicator')
        indicator?.classList.remove('hidden');

        startScreen?.remove();
    }

    public start() {
        this.removeStartScreen();
        this._board.generateGrid();
    }
}

export default SnakesLadders;