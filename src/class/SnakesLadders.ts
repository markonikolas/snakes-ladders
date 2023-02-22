import Board from './components/Board';
import Indicator from './components/Indicator';

class SnakesLadders {
    private board: Board;
    private indicator: Indicator;

    constructor(board: Board, indicator: Indicator) {
        this.board = board;
        this.indicator = indicator;
    }

    public start() {
        this.board.generateGrid();
        this.board.element.classList.remove('opacity-0')
    }
}

export default SnakesLadders;