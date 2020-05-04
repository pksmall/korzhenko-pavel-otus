import {LitElement, property, css, html } from 'lit-element';

class MyLeaf extends LitElement {
    @property({type: String}) id;

    static get styles() {
        return css`
            li {
                padding:5px;
                background-color:#eee;
                border:1px solid #aaa;
            }
            li > div { padding:3px; margin-bottom:5px; background-color:#ccc; }
            li > div + ul { margin-top:5px; }
            li ul { margin-left:15px; }
        `;
    }

    render() {
        return html`
            <li>leaf ${this.id}</li>
        `;
    }
}

customElements.define('my-leaf', MyLeaf);
