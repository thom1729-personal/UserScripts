// ==UserScript==
// @name         Thom's Tampermonkey Utilities
// @author       Thom Smith
// @description  Utility functions for other scripts
// @match        *
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    const style = (...args) => {
        const element = document.createElement('style');
        element.textContent = String.raw(...args)
        document.head.appendChild(element);
        return element;
    };

    window.__ThomsUtilities = {
        style,
    };
})();