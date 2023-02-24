import './style.css'

import Board from './class/components/Board';

import SnakesLadders from './class/SnakesLadders';

const boardElement = document.querySelector<HTMLElement>('#board');

const board = new Board(boardElement, { size: 10 })
const game = new SnakesLadders(board);

window.addEventListener('load', () => {
    game.board.generateGrid()

    const button = document.getElementById('play');
    button?.removeAttribute('disabled');

    button?.addEventListener('click', () => game.start());
});