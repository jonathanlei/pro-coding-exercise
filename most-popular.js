/* take a word and return the most common letter in the word, in case of tie, return first letter reached the tie*/
function mostPopular(word) {
  let letterCount = {};
  let highestCount = 0;
  let mostPopularLetter;
  for (let letter of word) {
    // count the frequency of the letter
    let currentCount = (letterCount[letter] || 0) + 1;
    letterCount[letter] = currentCount;
    // compare with the highest count
    if (currentCount > highestCount) {
      highestCount = currentCount;
      mostPopularLetter = letter;
    }
  }
  return mostPopularLetter;
}
