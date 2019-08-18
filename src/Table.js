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
 * Table
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class Table extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        // const button = document.createElement('button');
        // button.textContent = this.textContent;
        // button.textContent = this.getAttribute('data-text');
        // shadowRoot.appendChild(button);

        const icon = this.getAttribute("icon");

        // // Could also use appendChild().
        shadowRoot.innerHTML = `
            <table class="ui very basic table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Approved</td>
                  <td>None</td>
                </tr>
                <tr>
                  <td>Jamie</td>
                  <td>Approved</td>
                  <td>Requires call</td>
                </tr>
                <tr>
                  <td>Jill</td>
                  <td>Denied</td>
                  <td>None</td>
                </tr>
              </tbody>
            </table>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            table {
                width: 100%;
                background: #fff;
                margin: 1em 0;
                /* border: 1px solid rgba(34,36,38,.15); */
                box-shadow: none;
                border-radius: .25rem;
                text-align: left;
                vertical-align: middle;
                color: rgba(0,0,0,.87);
                border-collapse: separate;
                border-spacing: 0;
                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
            }
            table:last-child {
                margin-bottom: 0;
            }
            
            table > thead > tr > th {
                cursor: auto;
                background: #f9fafb;
                text-align: inherit;
                color: rgba(0,0,0,.87);
                padding: 0.5rem 0.5rem;
                vertical-align: inherit;
                font-style: none;
                font-weight: 700;
                text-transform: none;
                border-bottom: 1px solid rgba(34,36,38,.1);
                border-left: none;
                transition: background .1s ease,color .1s ease;
            }
            table > tbody > tr {
                border-bottom: 1px solid rgba(0,0,0,.1);
            }
            table > tbody > tr > td {
                padding: 0.5rem 0.5rem;
                text-align: inherit;
                border-top: 1px solid rgba(34,36,38,.1);
            }
            table > tbody > tr:first-child > td {
                border-top: none;
            }
            `;
    }
}

// Define the new element
window.customElements.define('widget-table', Table);