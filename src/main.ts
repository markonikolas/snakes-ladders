import './style.css'

import Board from './class/components/Board';

import SnakesLadders from './class/SnakesLadders';

window.addEventListener('load', () => {
    const boardElement = document.getElementById('board');
    const button = document.getElementById('play');

    button?.removeAttribute('disabled');

    button?.addEventListener('click', () => {
        const squareCount = document.querySelector<HTMLSelectElement>('#game-size')?.value;
        const playerCount = document.querySelector<HTMLSelectElement>('#player-count')?.value;

        if (!squareCount || !playerCount) return;

        const board = new Board(boardElement, { size: ~~squareCount })

        const game = new SnakesLadders(board, { players: ~~playerCount });

        game.start();
    });
});