import Board from './components/Board';

class SnakesLadders {
    private readonly _board: Board;

    constructor(board: Board) {
        this._board = board;
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
        this.board.generateGrid();
    }
}

export default SnakesLadders;