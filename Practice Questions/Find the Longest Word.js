function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
  const inputSentence = "The quick brown fox jumps over the lazy dog";
  const longestWord = findLongestWord(inputSentence);
  console.log(longestWord); // Output: "jumps"
  