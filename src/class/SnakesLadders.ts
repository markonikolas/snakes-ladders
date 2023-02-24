import Board from './components/Board';

class SnakesLadders {
    private readonly _board: Board;

    constructor(board: Board) {
        this._board = board;
    }

    get board() {
        return this._board;
    }

    public start() {
        const startScreen = document.getElementById('start-screen');

        startScreen?.classList.add('opacity-0');

        setTimeout(() => {
            startScreen?.remove()
        }, 1000);
    }
}

export default SnakesLadders;