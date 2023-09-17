#!/usr/bin/node

// Defining a variable name globalVariable
let globalVariable = 'Welcome';

// This defines the outer function
function outer() {
    // This will display the content of globalVariable
    alert(globalVariable);

    // A variable named course
    let course = 'Holberton';

    // A function inner
    function inner() {
        // Show the content of globalvariable and course by using concatenation
        alert(globalVariable + ' ' + course);

        // A variable name exclamation
        let exclamation = '!';
        // Create a function inception
        function inception() {
            // Show the content of globalVariable, course, and exclamation (concatenated)
            alert(globalVariable + ' ' + course + exclamation);
        }
        
        // Call the function inception
        inception();

        // Call the function inner
        inner();

        // Calling the function outer
        outer();
    }
}
