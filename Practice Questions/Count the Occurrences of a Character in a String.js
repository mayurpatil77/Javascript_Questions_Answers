function countOccurrences(str, char) {
    let count = 0;
    for (const c of str) {
      if (c === char) {
        count++;
      }
    }
    return count;
  }
  
  const inputString = "hello";
  const inputChar = "l";
  const occurrences = countOccurrences(inputString, inputChar);
  console.log(occurrences); // Output: 2
  