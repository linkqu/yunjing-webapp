/**
 * Button
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class Button extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        // const button = document.createElement('button');
        // button.textContent = this.textContent;
        // button.textContent = this.getAttribute('data-text');
        // shadowRoot.appendChild(button);

        // // Could also use appendChild().
        shadowRoot.innerHTML = `<button>
                <widget-icon icon="home"></widget-icon>
                ${this.textContent}
            </button>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            button { 
                cursor: pointer;
                display: inline-block;
                min-height: 1em;
                outline: 0;
                border: none;
                vertical-align: baseline;
                background: #e0e1e2 none;
                color: rgba(0,0,0,.6);
                font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
                margin: 0;
                padding: 0.5rem 1rem;
                text-transform: none;
                text-shadow: none;
                font-weight: 700;
                line-height: 1em;
                font-style: normal;
                text-align: center;
                text-decoration: none;
                border-radius: 0.25rem;
                box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                user-select: none;
                transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
                will-change: auto;
            }
            
            button:hover {
                background-color: #cacbcd;
                box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
                color: rgba(0,0,0,.8)
            }`;
    }
}

// Define the new element
window.customElements.define('widget-button', Button);