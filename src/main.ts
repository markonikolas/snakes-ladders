import './style.css'

import Board from './class/components/Board';

import SnakesLadders from './class/SnakesLadders';

window.addEventListener('load', () => {

    const boardElement = document.querySelector<HTMLElement>('#board');
    const button = document.getElementById('play');

    button?.removeAttribute('disabled');
    button?.addEventListener('click', () => {
        const squareCount = document.querySelector<HTMLOptionElement>('#game-size option')?.value;
        const playerCount = document.querySelector<HTMLOptionElement>('#player-count option')?.value;

        if (!squareCount || !playerCount) return;

        const board = new Board(boardElement, { size: ~~squareCount, players: ~~playerCount })
        const game = new SnakesLadders(board);
        game.start();
    });
});