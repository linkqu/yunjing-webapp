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
 * Loader
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class Loader extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        // const button = document.createElement('button');
        // button.textContent = this.textContent;
        // button.textContent = this.getAttribute('data-text');
        // shadowRoot.appendChild(button);

        const indicatorType = this.getAttribute('indicator-type');

        // // Could also use appendChild().
        shadowRoot.innerHTML = `
            <div class="loading-indicator-${indicatorType}"></div>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            @-webkit-keyframes rotating {
                0% {
                    -webkit-transform: rotate(0);
                    transform: rotate(0)
                }
            
                to {
                    -webkit-transform: rotate(1turn);
                    transform: rotate(1turn)
                }
            }

            @keyframes rotating {
                0% {
                    -webkit-transform: rotate(0);
                    transform: rotate(0)
                }
            
                to {
                    -webkit-transform: rotate(1turn);
                    transform: rotate(1turn)
                }
            }
            
            @-webkit-keyframes growing {
                0% {
                transform: scale(0);
              }
              50% {
                opacity: 1;
              }
            }
            
            @keyframes growing {
              0% {
                transform: scale(0);
              }
              50% {
                opacity: 1;
              }
            }
            
            :host {
                display: inline-block;
            }
            .loading-indicator-spinner {
                display: inline-block;
                animation: rotating .7s linear infinite;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                border: 0.125rem solid transparent;
                border-color: rgba(44,62,80,.1);
                border-right-color: #2c3e50;
            }
            
            .loading-indicator-expander {
                display: inline-block;
                width: 2rem;
                height: 2rem;
                vertical-align: text-bottom;
                background-color: currentColor;
                border-radius: 50%;
                opacity: 0;
                animation: growing .75s linear infinite;
            }`;
    }
}

// Define the new element
window.customElements.define('widget-loader', Loader);