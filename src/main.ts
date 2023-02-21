import './style.css'

import Board from './class/components/Board';

const boardElement = document.querySelector<HTMLElement>('#board');
console.time()
new Board(boardElement, { size: 10 })
console.timeEnd()
