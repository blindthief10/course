let checkPalindrome = function(name) {
  name = name.toLowerCase();
  let reversedName = name.split('').reverse().join('');
  let conclusion;
  name === reversedName ? conclusion = 'is' : conclusion = 'is not';

  console.log(`The name ${name} ${conclusion} a palindrome!`);
}

checkPalindrome('Jake');
checkPalindrome('Anna');

let findAnagram = function(firstWord, secondWord) {
  firstWord = firstWord.toLowerCase();
  secondWord = secondWord.toLowerCase();
  firstWord = firstWord.split('').sort().join('');
  secondWord = secondWord.split('').sort().join('');
  if (firstWord === secondWord) {
    console.log('These words are anagrams');
  } else {
    console.log('I am sorry not an anagram here!');
  }
}
