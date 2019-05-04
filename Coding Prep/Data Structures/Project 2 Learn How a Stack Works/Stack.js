// Assignment:
// Modify the given array and treat it like a stack
// using the JavaScript methods mentioned above.
// Remove the top element "PSY44" from the stack.
// Then add "CS50" to be the new top element of the stack.

var homeworkStack = ['BIO12', 'HIS80', 'MAT122', 'PSY44'];
// Only change code below this line

// Removes the top element "PSY44"
homeworkStack.pop();  // returns ['BIO12', 'HIS80', 'MAT122']

// Adds a new top element "CS50"
homeworkStack.push('CS50');  // returns ['BIO12', 'HIS80', 'MAT122', 'CS50']
