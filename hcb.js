// ==UserScript==
// @name        HideChatButt
// @namespace   b
// @namespace   http://tampermonkey.net/
// @grant       c
// @version     9.0
// @author      Hellfie
// @description Adds a button to hide chat on chess.com
// @match       https://www.chess.com/*
// ==/UserScript==

(function() {
    'use strict';
    const $ = document.querySelector.bind(document);
    $('body > div.board-layout-sidebar > div.sidebar-component').insertAdjacentHTML('beforeend', stylin() );
    chicha.textContent = "Hide chat";
    setTimeout(() => {
        //setTimeout needed to allow a few ms for the new Btn to be injected onto page
        $('#chicha').addEventListener('click', () => {
            var tohide = document.querySelector('div.resizable-chat-area-component');
            //tohide.remove();
            if (tohide.style.display == "none") {
              tohide.style.display = "flex";
              chicha.textContent = "Hide chat";
            }else{
              tohide.style.display = "none"
              chicha.textContent = "Show chat";
            }
        });
    },500);
})();
function stylin(){
    return `
    <button id="chicha"></button>
    <style>
        #chicha{
                position:relative;
                bottom:3px;
                left:3px;
                height:26px;
                width:76px;
                background-color:#21201e;
                text-align:center;
                z-index:99999;
                border: none;
                border-radius: 4px;
                color:#c3c2c2;
                }
    </style>
    `;
}
