import "./style.css";

import Board from "./class/components/Board";

import SnakesLadders from "./class/SnakesLadders";

try {
    const canvas = document.querySelector<HTMLCanvasElement>("#board")?.getContext('2d');

    if (!canvas) throw new Error("Game board is missing.");

    const board = new Board(canvas);

    new SnakesLadders(board);

} catch (error) {
    console.error(error);
}