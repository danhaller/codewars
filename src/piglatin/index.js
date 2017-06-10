const vowels = ['a','e','i','o','u', 'A', 'E', 'I', 'O', 'U'];
const isVowel = (char) => vowels.indexOf(char) !== -1;
const hasUpperCase = (arr) => arr.some(x => /[A-Z]/.test(x));

const pigify = (pigify) => {
  const firstVowel = pigify.split('').findIndex(isVowel);

  if (firstVowel === -1) return pigify;
  if (firstVowel === 0) return pigify + 'way';

  const prefix = pigify.split('').slice(0, firstVowel).concat(['a', 'y']);

  return pigify.split('').slice(firstVowel).concat(prefix).reduce((acc, next, index, original) => {
    return hasUpperCase(original) && index === 0? acc + next.toUpperCase() : acc + next.toLowerCase();
  }, '');
}

const pigLatin = sentence => {
  const words = /(\w+)/g;
  return sentence.replace(words, pigify);
}

module.exports = pigLatin;
