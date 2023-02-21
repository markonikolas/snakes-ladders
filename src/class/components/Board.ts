import Element from '../abstract/Element';
import { IBoardOptions } from '../interfaces/Board';

class Board extends Element {
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
                cell.classList.add('p-2')
                cell.classList.add(this.getRandomColorClass())

                row.push(cell);
            }

            if (tens % 2 === 0) row.reverse();

            grid.push(...row)
        }

        const fragment = document.createDocumentFragment();
        fragment.append(...grid);
        this.element.append(fragment);
    }

    private getRandomColorClass(): string {
        const rand = ~~Math.floor(Math.random() * 10).toFixed(0);

        let color = 'orange';

        switch (rand) {
            case 0:
                color = 'red'
                break;
            case 1:
                color = 'green'
                break;
            case 2:
                color = 'emerald'
                break;
            case 3:
                color = 'yellow'
                break;
            case 4:
                color = 'purple'
                break;
            case 5:
                color = 'amber'
                break;
            case 6:
                color = 'pink'
                break;
            case 7:
                color = 'rose'
                break;
            case 8:
                color = 'teal'
                break;
            case 9:
                color = 'blue'
                break;
            default:
                break;
        }


        return `bg-${color}-300`;
    }
}

export default Board;