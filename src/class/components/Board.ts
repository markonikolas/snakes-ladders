import Element from '../abstract/Element';
import { IBoardOptions } from '../interfaces/Board';

class Board extends Element {
    public gridSize: number;
    public colors = ['amber', 'pink', 'rose', 'teal', 'yellow', 'blue', 'red', 'green', 'pink', 'cyan', 'indigo', 'violet'];

    constructor(element: HTMLElement | null, opts: IBoardOptions) {
        super(element);

        this.gridSize = opts.size;
    }

    public generateGrid() {
        const { gridSize } = this;
        let grid: HTMLDivElement[] = [];

        this.element.classList.add(`grid-cols-${gridSize}`, `grid-rows-${gridSize}`)

        for (let tens = gridSize - 1; tens >= 0; tens--) {
            const row: HTMLDivElement[] = [];
            const colors = [...this.colors];

            for (let unit = gridSize; unit >= 1; unit--) {
                const cell = document.createElement('div') as HTMLDivElement;
                const color = Math.random() > 0.5 ? colors.shift() : colors.pop();

                cell.innerText = `${tens * gridSize + unit}`;
                cell.classList.add('p-2', `bg-${color}-300`);

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