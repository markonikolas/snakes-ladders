import './style.css'

import Board from './class/components/Board';

const boardElement = document.querySelector<HTMLElement>('#board');

new Board(boardElement, { size: 10 })
