#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w <= 0 || h <= 0) {
            /* if w or h is equal to 0 or not a positive integer,
            create an empty object*/
            return {};
        }   else {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;  /* Export the Rectangle class*/