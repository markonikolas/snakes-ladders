import AbstractElement from '../Abstract/AbstractElement';

class Board extends AbstractElement {
    constructor(element: HTMLElement | null) {
        super(element);

        this.generateGrid();
    }

    private generateGrid() {
        const gridSize = 10;
        let grid: HTMLDivElement[] = [];

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