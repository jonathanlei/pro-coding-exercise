
/* takes in an array of words, return an array of scores of words according on scrabble*/
function wordScores(words) {
  let wordScores = [];
  for (let word of words) {
    let score = 0;
    for (let letter of word) {
      // convert to upper case
      letter = letter.toUpperCase();
      // if it's not a letter, score is null 
      if (!letterScores[letter]){
        score=null;
        break;
      }
      score += letterScores[letter];
    }
    wordScores.push(score);
  }
  return wordScores;
}


let letterScores = { A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4, I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3, Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8, Y: 4, Z: 10 };