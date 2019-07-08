'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// function pigLatin(word) {
//   // defines vowels, trims string, makes all characters lowercase
//   const vowels = ['a','e','i','o','u'];
//   word = word.trim();
//   word = word.toLowerCase();
//   // search for position of first vowel in string
//   const findVowel = () => word.indexOf(vowels, 0)
//   // console.log(word);

//   const wordLoop = () => {
//     for (i = 0; i <= wordLoop.length; i++) {
//       let movedLetter = word.slice(0, findVowel.length);
//       if ()
      
//     }
//   }
// }





function pigLatin(word) {

  // Your code here
  
  // defines vowels, trims strings, makes all characters lowercase
  const vowels = ['a','e','i','o','u'];
  // i couldn't remember how to declare something as NOT something (aka a vowel) so i made this string before i remembered
  const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z']
  word = word.trim();
  word = word.toLowerCase();
  console.log(word)

  // if word begins with vowel...
  if (vowels.includes(word[0]) && !word.includes(' ')) {
  // ... puts "yay" at end
    return word + "yay"
  // if word begins with two consonants, moves two letters to end and adds "ay"
  } else if (consonant.includes(word[0]) && consonant.includes(word[1]) && !word.includes(' ')) {
    if (vowels.includes(word[2])) {
      let movedLetter = word.slice(0,2);
      return word.substr(2) + movedLetter + "ay";
    }
  // if word begins with one consonant and then a vowel, moves one letter to end and adds "ay"
  } else if (consonant.includes(word[0]) && !word.includes(' ')) {
    if (vowels.includes(word[1])) {
      let movedLetter = word.slice(0,1);
      return word.substr(1) + movedLetter + "ay";
    }
  } else if (word.includes(' ')) {
    // perform pigLatin conversion on multiple words...
    let separatedWords = word.split(' ');
    if(vowels.includes(separatedWords[0][0])) {
      if (vowels.includes(separatedWords[1][0])) {
        return wordVowel(separatedWords[0]) + ' ' + wordVowel(separatedWords[1])
      }
    } //else if ()
  }
}





function getPrompt() {
  rl.question('word ', (answer) => {
    if (answer.includes(' ')) {
      let separatedWords = answer.trim().toLowerCase().split(' ');
      if (separatedWords.length < 2){
        console.log(pigLatin(separatedWords.toString()))
      } else console.log((pigLatin(separatedWords[0])) + ' ' + (pigLatin(separatedWords[1])))
      getPrompt();
      displayPigLatin();
      
    } else { 
      let newWord = answer.trim().toLowerCase();
      console.log(newWord)
      console.log( pigLatin(newWord) );
    getPrompt();
    displayPigLatin();
  }
  });
}


function displayPigLatin() {
  // this pulls data from form
  let formInput = document.getElementById('userInput').value;
  // this performs pigLatin function on word put into translator
  pigLatin(formInput);
  // this displays result
  document.write(pigLatin(formInput));
}


// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    // it('should separate two words and return them together', () => {
    //   assert.equal(pigLatin('hop fest'), 'ophay estfay');
    // });
  });
} else {

  pigLatin();

}






$(function() {
  let $submitButton = $('#submitButton');
  let $listOfItemsID = $('#listOfItemsID');
  
  $submitButton.on('click',function(e) {
      e.preventDefault();
      // above might be more specific to jQuery -- this particular function keeps the item from instantly going away after click
      let $userInput = $('#userInput').val();
      // console.log($userInput);
      // line above tests for Chrome inspect tool
      // $listOfItemsID.html($userInput);
      // line above makes input show up on page after we type it in and hit enter
      $(`<li>${$userInput}</li>`).appendTo($listOfItemsID);
      // below clears submission so it's ready for the next one
      // console.log(#userInput);
      $('#userInput').val('');
      // adding a space between '' in val() will clear the field above - not having the space will return it to the original text

  });

  // "this" is a JS keyword - dark blue means it's a reserved word in JS
  $listOfItemsID.on('click', 'li', function() {
      let $this = $(this);
      // console.log($this);
      $this.remove();
  });


});