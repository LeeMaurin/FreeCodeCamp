// This function generates a fibonacci number Series.
// The output is a summation of the even numbers in the
// fibonacci series.

function fiboEvenSum(number) {
  var list = [1, 1];
  for (var i = 1; i <= number; i++) {
    let a = list[i] + list[i - 1];
    list.push(a);
  }
  // console.log(list);
  return list.filter(i => i % 2 == 0).reduce((a, b) => a + b);
}

console.log(fiboEvenSum(10)); // returns 188
console.log(fiboEvenSum(23)); // returns 60696
console.log(fiboEvenSum(43)); // returns 1485607536
