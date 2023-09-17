#!/usr/bin/node

console.log('Start of the execution queue');

setTimeout(function() {
    console.log('Final code block to be executed');
}, 0);

for (let p = 1; p <= 100; p++) {
    console.log(p);
}

console.log('End of the loop printing');
