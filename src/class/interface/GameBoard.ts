import Board from '../components/Board';

interface GameBoard {
    get board(): Board;

    set board(board: Board);
}

export default GameBoard;