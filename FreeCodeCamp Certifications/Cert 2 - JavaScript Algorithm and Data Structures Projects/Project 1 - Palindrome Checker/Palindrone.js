// Project 1: Palindrome Checker

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  if (
    str.replace(/[\W_]/g, '').toLowerCase() ===
    str
      .replace(/[\W_]/g, '')
      .toLowerCase()
      .split('')
      .reverse()
      .join('')
  ) {
    console.log('true');
  } else {
    console.log('false');
  }
}

palindrome('eye'); // returns true
palindrome('_eye'); // returns true
palindrome('race car'); // returns true
palindrome('not a palindrome'); // returns false
palindrome('A man, a plan, a canal. Panama'); // returns true
palindrome('never odd or even'); // returns true
palindrome('nope'); // returns false
palindrome('almostomla'); // return false
palindrome('My age is 0, 0 siega ym.'); // returns true
palindrome('1 eye for of 1 eye'); // returns false
palindrome('0_0 (: /- : 0-0'); // returns true
palindrome('five|_/|four'); // returns false
