import "./style.css";

import Board from './components/Board';

try {
    const canvas = document.querySelector<HTMLCanvasElement>("#board")?.getContext('2d');

    if (!canvas) throw new Error("Game board is missing.");

    const board = new Board(canvas);

    board.generateGrid();

} catch (error) {
    console.error(error);
}