function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  const inputString = "level";
  const isPalindromeResult = isPalindrome(inputString);
  console.log(isPalindromeResult); // Output: true
  