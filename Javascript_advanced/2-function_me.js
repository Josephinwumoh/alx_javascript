#!/usr/bin/node

function welcomeMessage(fullName) {
    return function() {
        alert(`Welcome ${fullName}`);
    };
}

// Creating three variables.
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');
