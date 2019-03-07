// Finds the sum of all the multiples of 3 or 5 for a given number

function multiplesOf3and5(number) {
  let sum_total = 0;
  for (var i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum_total = sum_total + i;
    }
  }
  return console.log(sum_total);
}

multiplesOf3and5(1000); // returns a value of 233168
multiplesOf3and5(49); // returns a value of 543
multiplesOf3and5(19564); // returns a value of 89301183
