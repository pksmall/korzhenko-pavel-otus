import {LitElement, property, css, html } from 'lit-element';
import {jsonData} from "./my-tree-raw";
import "./my-tree";
import "./my-leaf";

class MyRoot extends LitElement {
    @property({type: String}) id;
    @property({type: Object}) data;

    static get styles() {
        return css`
            * { font-family:lucida grande, arial; font-size:11px; }
            ul {
                padding:3px;
                border:1px solid #aaa;
            }
            ul li {
                padding:5px;
                background-color:#eee;
            }
            ul li > div { padding:3px; margin-bottom:5px; background-color:#ccc; }
            ul li > div + ul { margin-top:5px; }
            ul li ul { margin-left:15px; }
        `;
    }

    constructor() {
        super();
        this.data = jsonData;
    }

    render() {
        return html`
          ${this.main()}
        `;
    }

    main() {
        return html`
          <ul>
            ${this.data.map(item => vList(item))}                
          </ul>
        `;
    }
}

const vList = elem => {
    if (elem.items) {
        return html`<my-tree theData="${JSON.stringify(elem.items)}" id="${elem.id}">${elem.id}</my-tree>`;
    } else {
        return html`<my-leaf id="${elem.id}"></my-leaf>`;
    }
};

customElements.define('my-root', MyRoot);
