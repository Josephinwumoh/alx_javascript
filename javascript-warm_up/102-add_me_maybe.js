#!/usr/bin/node

// Add me maybe.
function addMeMaybe(number, theFunction) {
    number += 1;
    theFunction(number);
}

module.exports = {
    addMeMaybe: addMeMaybe
};
