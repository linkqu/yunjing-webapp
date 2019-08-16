/**
 * Button
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class Checkbox extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        // const button = document.createElement('button');
        // button.textContent = this.textContent;
        // button.textContent = this.getAttribute('data-text');
        // shadowRoot.appendChild(button);

        let label = this.getAttribute('label');
        // // Could also use appendChild().
        shadowRoot.innerHTML = `<input id="test" type="checkbox" /> <label for="test">${label}</label>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            /* Checkmark */
            label:after {
              font-family: 'Checkbox';
            }
            
            /* Checked */
            input:checked ~ label:after {
              content: '\\e800';
            }
            
            /* Indeterminate */
            input:indeterminate ~ label:after {
              font-size: 1rem;
              content: '\\e801';
            }
            
            :host {
                position: relative;
                display: inline-block;
                backface-visibility: hidden;
                outline: none;
                vertical-align: baseline;
                font-style: normal;
                min-height: 1rem;
                font-size: 1rem;
                line-height: 1rem;
                min-width: 1rem;
            }
            
            input[type="checkbox"] {
                cursor: pointer;
                position: absolute;
                top: -0.125rem;
                left: -0.25rem;
                opacity: 0 !important;
                outline: none;
                width: 1rem;
                height: 1rem;
            }

            label {
                cursor: auto;
                position: relative;
                display: block;
                padding-left: 1.5rem;
                outline: none;
                font-size: 1rem;
                user-select: none;
            }
            label:before {
              position: absolute;
              top: 0;
              left: 0;
              width: 0.875rem;
              height: 0.875rem;
              content: '';
              background: #fff;
              border-radius: 0.125rem;
              transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
              border: 1px solid #d4d4d5;
            }
            label:after {
                position: absolute;
                font-size: 1rem;
                top: 0;
                left: 0;
                width: 1rem;
                height: 1rem;
                text-align: center;
                opacity: 0;
                color: rgba(0, 0, 0, 0.87);
                transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
            }
            
            /* Hover */
            label:hover::before {
                background: #fff;
                border-color: rgba(34, 36, 38, 0.35);
            }
            label:hover {
                color: rgba(0, 0, 0, 0.8);
            }
            
            /* Active */
            label:active::before {
                background: #f9fafb;
                border-color: rgba(34, 36, 38, 0.35);
            }
            label:active::after {
                color: rgba(0, 0, 0, 0.95);
            }
            input:active ~ label {
                color: rgba(0, 0, 0, 0.95);
            }
            
            /* Focus */
            input:focus ~ label:before {
                background: #fff;
                border-color: #96C8DA;
            }
            input:focus ~ label:after {
                color: rgba(0, 0, 0, 0.95);
            }
            input:focus ~ label {
                color: rgba(0, 0, 0, 0.95);
            }
            
            /* Checked */
            input:checked ~ label:before {
                background: #fff;
                border-color: rgba(34, 36, 38, 0.35);
            }
            input:checked ~ label:after {
                opacity: 1;
                color: rgba(0, 0, 0, 0.95);
            }`;
    }
}

// Define the new element
window.customElements.define('widget-checkbox', Checkbox);