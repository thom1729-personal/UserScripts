// ==UserScript==
// @name         Slack Styles
// @author       Thom Smith
// @description  Custom styles for Slack
// @match        https://app.slack.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const { style } = window.__ThomsUtilities;

    style`
        .sk-client-theme--dark {
            --sk_primary_background: 39,44,49;
            --sk_inverted_foreground: 39,44,49;
        }
    `;
})();