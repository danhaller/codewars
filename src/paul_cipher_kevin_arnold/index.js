const indexOfTheAlphabet = (letter) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').indexOf(letter) + 1;
const letterOfTheAlphabet = (index) => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[index-1];
const letters = '/[A-Z]/';
const encodeChar = (char, previous) => {
  const letterIndex = indexOfTheAlphabet(char) + indexOfTheAlphabet(previous);

  return letterIndex <= 26? letterOfTheAlphabet(letterIndex) : letterOfTheAlphabet(letterIndex%26);
}

const decodeChar = (char, previous) => {
  const letterIndex = indexOfTheAlphabet(char) - indexOfTheAlphabet(previous);

  return letterIndex >= 1? letterOfTheAlphabet(letterIndex) : letterOfTheAlphabet(26 + letterIndex);
}

const previousLetter = (arr, start) => {
  if (start === -1) return null;
  const letters = /[A-Z]/;

  return letters.test(arr[start]) ?
    arr[start] :
    previousLetter(arr, start - 1);
}

const encode = input => {
  if (input === null || input === undefined) return '';

  return input.toUpperCase().split('').map((char, index, arr) => {
    const letters = /[A-Z]/;

    return letters.test(char) && index ?
      encodeChar(char, previousLetter(arr, index-1)) :
      char;
  }).join('');
}

const decode = input => {
  if (input === null || input === undefined) return '';

  return input.toUpperCase().split('').reduce((acc, char, index, arr) => {
    const letters = /[A-Z]/;

    return letters.test(char) && index ?
      acc.concat(decodeChar(char, previousLetter(acc, index-1))) :
      acc.concat(char);
  }, []).join('');
}

module.exports = { encode, decode };
