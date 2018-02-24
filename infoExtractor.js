/*
  infoExtractor.js

  Extract unique information of each word.

  N, Jack, Jimmy

  February 22, 2018
  Marlboro College
*/

class infoExtractor {
  constructor(){
    import letters from 'letters.js'
    import vowels from 'vowels.js'
  }
  case_list(word){
    let result = [];
    for (let i = 0; i < _word.length; i++){
      if (word[i] === word[i].toUpperCase()){
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
    for (let i = 0; i < _word.length; i++){
      if (vowel.includes(word[i])){
        result.push(1);
      }
      else{
        result.push(0);
      }
    }
  }

  check_latin(word){
    let latin = false;
    let list = [];
    for (let i = 0; i < word.length; i++){
      if (letters.includes(word[i])){
        list.append(1);
      }
      else{
        list.append(0);
      }
    }

    if (list.includes(1))
      latin = true;

    return latin
  }

  execute(word){
    const _word = word.split();
    case_list = case_list(_word);
    class_list = class_list(_word);
    check_latin = check_latin(_word);
    const wordInfo = {
      case: case_list,
      classl: class_list,
      latin: check_latin
    }
    return wordInfo
  }

}

export default infoExtractor
