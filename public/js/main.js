"use strict";

import EventHandler from "./EventHandler.js";

class Main{
    constructor(){
        this.EventHandler = new EventHandler();
        this.prepUX();
    }

    prepUX(){
    }
}

window.addEventListener('load', () => {
    new Main();
});