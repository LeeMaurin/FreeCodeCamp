// Assignment:
// First create a buffer that is 64-bytes.
// Then create a Int32Array typed array with a view of it called i32View.

//A buffer of 64 bytes
var buffer = new ArrayBuffer(64);

//A 32-bit int typed array with the above buffer
var i32View = new Int32Array(buffer);
