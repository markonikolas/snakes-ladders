import { DOMElement } from '../Interfaces/DOMElement';

abstract class AbstractElement implements DOMElement {
    private _element: HTMLElement;

    constructor(element: HTMLElement | null) {
        if (!element) throw TypeError('Element can\'t be null.')
        this._element = element;
    }

    get element(): HTMLElement {
        return this._element;
    }

    set element(el: HTMLElement) {
        this._element = el;
    }
}

export default AbstractElement;