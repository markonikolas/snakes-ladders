import AbstractElement from '../Abstract/AbstractElement';
import { IBoardOptions } from '../Interfaces/Board';

class Board extends AbstractElement {
    public gridSize: number;

    constructor(element: HTMLElement | null, opts: IBoardOptions) {
        super(element);

        this.gridSize = opts.size;
        this.generateGrid();
    }

    private generateGrid() {
        const { gridSize } = this;
        let grid: HTMLDivElement[] = [];

        this.element.classList.add(`grid-cols-${gridSize}`, `grid-rows-${gridSize}`)

        for (let tens = gridSize - 1; tens >= 0; tens--) {
            const row: HTMLDivElement[] = [];

            for (let unit = gridSize; unit >= 1; unit--) {
                const cell = document.createElement('div') as HTMLDivElement;
                cell.innerText = `${tens * gridSize + unit}`;
                cell.classList.add('p-2', 'bg-gray-300')

                row.push(cell);
            }

            if (tens % 2 === 0) row.reverse();

            grid.push(...row)
        }

        const fragment = document.createDocumentFragment();
        fragment.append(...grid);
        this.element.append(fragment);
    }
}

export default Board;