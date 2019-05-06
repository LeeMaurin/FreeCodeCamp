// Instructions:

// Write a push method that pushes an element to the top of the stack,
// a pop method that removes the element on the top of the stack,
// a peek method that looks at the first element in the stack,
// an isEmpty method that checks if the stack is empty,
// and a clear method that removes all elements from the stack.

function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // Only change code below this line

  // pushes an element to the top of the stack
  this.push = function(val) {
    return collection.push(val);
  };

  // pop method that looks at the first element in a stack
  this.pop = function() {
    return collection.pop();
  };

  // peek method that looks at the first element in the stack
  this.peek = function() {
    return collection[collection.length - 1];
  };
  // isEmpty method that checks if the stack is empty
  this.isEmpty = function() {
    return collection.length === 0;
  };

  // clear method that removes all elements from a stack
  this.clear = function(val) {
    return (collection.length = 0);
  };

  // Only change code above this line
}
