import './style.css'

import Board from './class/components/Board';
import Indicator from './class/components/Indicator';

import SnakesLadders from './class/SnakesLadders';

const boardElement = document.querySelector<HTMLElement>('#board');
const indicatorElement = document.querySelector<HTMLElement>('#indicator');

const board = new Board(boardElement, { size: 10 })
const indicator = new Indicator(indicatorElement);
const game = new SnakesLadders(board, indicator);

window.addEventListener('load', () => game.start())