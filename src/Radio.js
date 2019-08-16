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
 * Radio
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class Radio extends HTMLElement {

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
        shadowRoot.innerHTML = `
            <input id="radio" type="radio" />
            <label for="radio">${label}</label>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            :host {
                position: relative;
                display: inline-block;
                backface-visibility: hidden;
                outline: none;
                vertical-align: baseline;
                font-style: normal;
                min-height: 1rem;
                font-size: 1rem;
                min-width: 1rem;
            }
            
            input[type="radio"] {
                cursor: pointer;
                position: absolute;
                top: -0.09375rem;
                left: -0.09375rem;
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
                top: 0.0625rem;
                left: 0;
                width: 0.875rem;
                height: 0.875rem;
                content: '';
                background: #fff;
                border-radius: 500rem;
                transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
                border: 0.0625rem solid #d4d4d5;
                transform: none;
            }
            label:after {
                position: absolute;
                font-size: 1rem;
                top: 0.0625rem;
                left: 0;
                width: 1rem;
                height: 1rem;
                text-align: center;
                opacity: 0;
                color: rgba(0, 0, 0, 0.87);
                transition: border 0.1s ease, opacity 0.1s ease, transform 0.1s ease, box-shadow 0.1s ease;
                border: none;
                content: ''!important;
                line-height: 1rem;
                border-radius: 500rem;
                transform: scale(.46666667);
                background-color: rgba(0,0,0,.87)
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
                background-color: rgba(0,0,0,.95)
            }
            input:focus ~ label {
                color: rgba(0, 0, 0, 0.95);
            }
            input:focus:checked ~ label:before {
                background-color: #fff;
            }
            input:focus:checked ~ label:after {
                background-color: rgba(0,0,0,.95)
            }
            
            /* Checked */
            input:checked ~ label:before {
                border-color: rgba(34, 36, 38, 0.35);
                background-color: #fff
            }
            input:checked ~ label:after {
                opacity: 1;
                color: rgba(0, 0, 0, 0.95);
                background-color: rgba(0,0,0,.95)
            }

            input:indeterminate ~ label:after {
                opacity: 0
            }`;
    }
}

// Define the new element
window.customElements.define('widget-radio', Radio);