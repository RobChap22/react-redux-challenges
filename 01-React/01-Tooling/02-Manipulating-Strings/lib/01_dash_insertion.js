function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const wordArr = word.split("");
  for (let i = 1; i < wordArr.length; i++) {
    if (vowels.includes(wordArr[i - 1]) && vowels.includes(wordArr[i]) {
      wordArr.splice(i, 0, '-');
    }
  }
  return wordArr.join('');
}

module.exports = insertDash;
