#!/usr/bin/node

const supSquare = require('./5-square');

/* A class Square that inherits from Rectangle */
class Square extends supSquare {
    charPrint (c) {
        if (c == null) {
            c = 'X';
        }
        for (let joseph = 0; joseph < this.width; joseph++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;