function mostPopular(s) {
  let ltr_obj = {};
  let high = 0;
  let ltr;
  for (let letter of s) {
    const count = ltr_obj[letter] || 0;
    const nc = count + 1;
    ltr_obj[letter] = nc;
    if (nc >= high) {
      high = nc;
      ltr = letter;
    }
  }
  return ltr;
}
