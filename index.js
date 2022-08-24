function isPalindrome(word) {
  // Write your algorithm here
  const arrOfChars = [];
  for (let i in word) {
    arrOfChars.unshift(word[i]);
  }
  const palindrome = arrOfChars.join('');
  if (palindrome === word) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
  //create a new array
  //write a for loop, iternating over the string at each interval
  //unshift() the chars of the string to the array 
  //convert the array to a string using .toString
  //use .join() to combine the chars together to one string 
  //if newString === word then return true 
  // else return false 
  //
*/

/*
  Add written explanation of your solution here
  by using an array, we have a place to store our data
  using a for loop, we can iterate over any string over any length
  we can take each char, starting at index 0 at place it at the END of our array
  by using an array we can use its methods, unshift being the most useful
  thus creating a reverse of our string 
  then we can convert the array to a string and combine the chars with no gaps using the .join('') method
  lastly we use an if else statement to either return true if the string is a palindrome and false if its not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
