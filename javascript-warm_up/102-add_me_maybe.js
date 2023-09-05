#!/usr/bin/node

// Add me maybe.
function addMeMaybe(number, theFunction) {
    number += 1;
    theFunction(number);
}

exports.addMeMaybe = {
    addMeMaybe: addMeMaybe
};
