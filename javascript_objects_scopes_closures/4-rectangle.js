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
            console.log('X'.repeat(this.width));
        }
    }

    /* Rotate the width and height of the Rectangle */
    rotate () {
        [this.width, this.height] = [this.height, this.width];
    }

    /* Double that multiplies the width and height of the Rectangle by 2 */
    double () {
        this.width = this.width * 2;
        this.height = this.height * 2;
    }

}

module.exports = Rectangle;
