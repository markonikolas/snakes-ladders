import './style.css'

import Board from './class/Concrete/Board';

const boardElement = document.querySelector<HTMLElement>('#board');

new Board(boardElement)
