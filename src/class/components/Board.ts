import Element from '../abstract/Element';
import { IBoardField, IBoardOptions } from '../interfaces/Board';

class Board extends Element {
    public gridSize: number;
    public colors = ['amber', 'pink', 'rose', 'teal', 'yellow', 'blue', 'red', 'green', 'pink', 'cyan', 'indigo', 'violet'];

    public squares: IBoardField[] = [
        [2, 38], [7, 14], [8, 31],
        [15, 26], [16, 6], [21, 42],
        [28, 84], [36, 44], [46, 25],
        [49, 11], [51, 67], [62, 19],
        [64, 60], [71, 91], [74, 53],
        [78, 98], [87, 94], [89, 68], [92, 88],
        [95, 75], [99, 80]
    ];

    constructor(element: HTMLElement | null, opts: IBoardOptions) {
        super(element);

        this.gridSize = opts.size;
    }

    public flushGrid() {
        console.log(this.element)
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