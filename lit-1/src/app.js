import {LitElement, property, css, html } from 'lit-element';
import {jsonData} from "./my-tree-raw";
import "./my-root";

class MyElement extends LitElement {
    @property({type: String}) myProp = 'stuff';
    @property({type: String}) message;

    static get styles() {
        return css`
            div { 
                color: #fcacfa; 
            }
            p {
                color: #aaafff;
            }
            button {
               color: #fff000;
            }  
        `;
    }

    handleClick() {
        console.log("Press button!");
    }

    render() {
        return html`
      <p>Hello World</p>
      <div>Hello ${this.message}</div>
      <button @click="${this.handleClick}">press me</button>
      ${this.myProp}
    `;
    }
}

customElements.define('my-element', MyElement);
