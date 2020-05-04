import {LitElement, property, css, html } from 'lit-element';
import "./my-leaf";

class MyTree extends LitElement {
    static get properties() {
        return {
            id: { type: String },
            theData: {
                reflect: true,
                converter(value) {
                    console.log('theData\'s converter.');
                    console.log('Processing:', value, typeof(value));

                    let retVal = JSON.parse(value);
                    console.log('Returning:', retVal, typeof(retVal));
                    return retVal;
                }
            }
        }
    }

    constructor() {
        super();
        this.theData = 'theData';
    }

    static get styles() {
        return css`
            ul {
                padding:5px;
                background-color:#eee;
                border:1px solid #aaa;
            }
            ul > div { padding:3px; margin-bottom:5px; background-color:#ccc; }
            ul > div + ul { margin-top:5px; }
            ul { margin-left:15px; }
        `;
    }

    render() {
        return html`
          ${this.main()}
        `;
    }

    main() {
        return html`
          <div>
              <ul id="${this.id}">
                <p>${this.id}</p>
                ${console.log(this.theData, typeof  this.theData)}
                ${this.theData.map(item => vList(item))}                
              </ul>
          </div>
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

customElements.define('my-tree', MyTree);
