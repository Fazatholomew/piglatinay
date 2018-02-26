/*
  infoExtractor.js

  Extract unique information of each word.

  N, Jack, Jimmy

  February 22, 2018
  Marlboro College
*/

import letters from './letters.js'
import vowels from './vowels.js'

class infoExtractor {
  constructor(){
  }
  case_list(word){
    let result = [];
    for (let i = 0; i < word.length; i++){
      if (word[i] === word[i].toUpperCase()){
        result.push(1);
      }
      else if (!letters.includes(word[i])){
        result.push(2);
      }
      else{
        result.push(0);
      }
    }
    return result;
  }

  class_list(word){
    let result = [];
    for (let i = 0; i < word.length; i++){
      if (vowels.includes(word[i])){
        result.push(1);
      }
      else{
        result.push(0);
      }
    }
    return result
  }

  check_latin(word){
    let latin = false;
    let list = [];
    for (let i = 0; i < word.length; i++){
      if (letters.includes(word[i])){
        list.push(1);
      }
      else{
        list.push(0);
      }
    }

    if (list.includes(1)){
      latin = true;
    }
    return latin
  }

  execute(word){
    const _word = word.split("");
    let case_list = this.case_list(_word);
    let class_list = this.class_list(_word);
    let check_latin = this.check_latin(_word);
    let wordInfo = {
      case: case_list,
      classl: class_list,
      latin: check_latin
    }
    return wordInfo
  }

}

export default infoExtractor
