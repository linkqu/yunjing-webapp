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
 * FlexboxLayout
 * vw vh
 *
 * @author hongquanli <hongquanli@qq.com>
 * @version 1.0 2018-06-29 11:04
 */
class FlexboxLayout extends HTMLElement {

    constructor() {
        super();

        const shadowRoot = this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        // const button = document.createElement('button');
        // button.textContent = this.textContent;
        // button.textContent = this.getAttribute('data-text');
        // shadowRoot.appendChild(button);

        // // Could also use appendChild().
        shadowRoot.innerHTML = this.innerHTML;
        // shadowRoot.innerHTML = this.textContent;
        // shadowRoot.innerHTML = `
        //     <div class="box">
        //        <div class="box-item"></div>
        //     </div>`;
        // header.shadowRoot === shadowRoot
        // shadowRoot.host === header

        const width = this.getAttribute("width");
        const height = this.getAttribute("height");
        const direction = this.getAttribute('direction');
        const alignItems = this.getAttribute('align-items');
        const borderTop = this.getAttribute('border-top');
        const borderBottom = this.getAttribute('border-bottom');
        const borderRight = this.getAttribute('border-right');

        const itemPadding = this.getAttribute('item-padding');
        const itemMargin = this.getAttribute('item-margin');

        const firstItemPadding = this.getAttribute('first-item-padding');
        const firstItemMargin = this.getAttribute('first-item-margin');

        shadowRoot.appendChild(style);
        style.textContent = `
            /* :host { } */
            /* :host-context(h1) { font-style: italic; } */
            
            :host {
                ${width ? `width: ${width};` : ''}
                ${height ? `height: ${height};` : ''}
                display: flex;
                /* align-items: flex-start | flex-end | center | baseline | stretch; */
                align-items: ${alignItems ? alignItems : 'center'};
                /* flex-direction: row | row-reverse | column | column-reverse; */
                flex-direction: ${direction ? direction : 'row'};
                ${borderTop ? `border-top: ${borderTop};` : ''}
                ${borderBottom ? `border-bottom: ${borderBottom};` : ''}
                ${borderRight ? `border-right: ${borderRight};` : ''}
            }
            
            * {
                ${itemPadding ? `padding: ${itemPadding};` : 'padding: 0;'}
                ${itemMargin ? `margin: ${itemMargin};` : 'margin: 0;'}
                text-align: center;
            }
            :first-child { 
                ${firstItemPadding ? `padding: ${firstItemPadding};` : ''}
                ${firstItemMargin ? `margin: ${firstItemMargin};` : ''}
            }`;
    }
}

// Define the new element
window.customElements.define('widget-flexbox-layout', FlexboxLayout);