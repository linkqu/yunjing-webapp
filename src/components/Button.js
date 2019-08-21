/*
 * Copyright (c) 2009, Linkqu and/or its affiliates. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 *   - Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *
 *   - Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *
 *   - Neither the name of Linkqu or the names of its
 *     contributors may be used to endorse or promote products derived
 *     from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
 * IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


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

        const iconPosition = this.getAttribute("icon-position");
        const icon = this.getAttribute("icon");

        const background = this.getAttribute("background");

        // // Could also use appendChild().
        shadowRoot.innerHTML = `
            <button>
                ${iconPosition === 'left'? `<widget-icon icon="${icon}"></widget-icon>`: ''}
                ${this.textContent}
                <!--<widget-loader indicator-type="expander"></widget-loader>-->
                ${iconPosition === 'right'? `<widget-icon icon="${icon}"></widget-icon>`: ''}
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
                min-height: 2rem;
                outline: 0;
                border: 0.0625rem solid transparent;
                vertical-align: baseline;
                ${background ? `background: ${background} none;` : 'background: #fff none;'}
                color: rgba(0,0,0,.6);
                font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
                margin: 0;
                padding: 0 0.875rem;
                text-transform: none;
                text-shadow: none;
                font-weight: 700;
                font-size: 0.875rem;
                line-height: 0.875rem;
                font-style: normal;
                text-align: center;
                text-decoration: none;
                border-radius: 0.25rem;
                box-shadow: 0 0 0 0.125rem transparent inset, 0 0 0 0 rgba(34,36,38,.15) inset;
                user-select: none;
                transition: opacity .1s ease,background-color .1s ease,color .1s ease,box-shadow .1s ease,background .1s ease;
                will-change: auto;
            }
            
            button:hover {
                background-color: #ecf6fe;
                box-shadow: 0 0 0 1px transparent inset,0 0 0 0 rgba(34,36,38,.15) inset;
                color: rgba(0,0,0,.8);
            }
            button:active {
                background-color: #d8eefd;
            }`;
    }
}

// Define the new element
window.customElements.define('widget-button', Button);