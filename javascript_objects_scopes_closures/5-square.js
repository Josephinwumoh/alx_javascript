#!/usr/bin/node

// A constant variable from 4-rectangle.

const Rectangle = require('./4-rectangle');

/* class Square inherits from class Rectangle */
class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }
}

module.exports = Square;
