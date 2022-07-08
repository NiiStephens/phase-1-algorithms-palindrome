function isPalindrome(word) {
  // Write your algorithm here

}
/* 
  Add your pseudocode here
   isPalindrome function should return true with "abba" is passed as an argument
   isPalindrome function should return true with "racecar" is passed as an argument
   isPalindrome function should return true with "a" is passed as an argument
   isPalindrome function should return false with "robot" is passed as an argument
   isPalindrome function should return false with "ab" is passed as an argument
  

/*
  Add written explanation of your solution here
  A palindrome is a word that whether spelt from the back or the front the word is not changed
  In this lab I would use the control flow in the isPalindrome function to return the boolean statements when the arguments are passed

*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
let wordArray = word.slice('')
  if (wordArray === word){
    return true;
  }
  else{ 
    return false;
  }
    
  }

palindrome('')


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;
