#!/usr/bin/node

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
    /* Print the Rectangle using the character x */
    print () {
        for (let Joseph = 0; Joseph < this.height; Joseph++) {
            console.log('x'.repeat(this.width));
        }
    }
}

module.exports = Rectangle;