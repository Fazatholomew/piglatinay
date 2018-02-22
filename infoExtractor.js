/*
  infoExtractor.js

  Extract unique information of each word.

  N, Jack, Jimmy

  February 22, 2018
  Marlboro College
*/

class infoExtractor {
  constructor(){
    import letters from 'letters'
    import vowels from 'vowels'
  }
  case_list(word){
    let result = [];
    const _word = word.split();
    for (let i = 0; i < _word.length; i++){
      if (_word[i] === _word[i].toUpperCase()){
        result.push(1);
      }
      else if (!letters.includes(word[i])){
        result.push(0);
      }
      else{
        result.push(2);
      }
    }
    return result;
  }

  class_list(word){
    result = [];
    const _word = word.split();
    for (let i = 0; i < _word.length; i++){
      if (vowel.includes(_word[i])){
        result.push(1);
      }
      else{
        result.push(0);
      }
    }
  }

  
}
