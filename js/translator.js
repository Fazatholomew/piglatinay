/*
  Translator.js

  Translate words into piglatin.

  N, Jack, Jimmy

  February 23, 2018
  Marlboro College

*/

import letters from 'letter.js'
import vowels from 'vowels.js'
import infoExtractor from 'infoExtractor.js'

class translator {
  constructor(){
  }

  execute(word,start='',srcend='',end=''){
    const wordInfo = self.infoExtractor.execute(word);
    let _word = word.split();
    let newword = "";
    let piglatined = []
    let appendage = ""

    if (!wordInfo.latin){
      return word
    }

    if (!word){
      return word
    }

    if(!letters.includes(_word[_word.length - 1])){
      let localword = _word
      localword.pop();
      newword = localword.join("");
      wordInfo.case.pop();
      return self.execute(newword, start, srcend, end + _word[_word.length - 1])
    }

    if(!letters.includes(_word[0])){
      let localword = _word
      localword.splice(0, 1);
      newword = localword.join("");
      wordInfo.case.splice(0, 1);
      return self.execute(newword, start + _word[0], srcend, end)
    }

    if(!vowel.includes(_word[0])){
      let localword = _word
      localword.splice(0, 1);
      newword = localword.join("");
      wordInfo.classl[classl.length - 1] = (wordInfo.classl[0])
      return self.execute(newword, start, _word[0] + srcend, end)
    }

    else if (!wordInfo.classl[classl.length - 1]){
      piglatined = _word;
      appendage = "ay"
    }

    else if (wordInfo.classl[classl.length - 1]){
      piglatined = _word;
      appendage = "way"
    }

    piglatined.append(appendage);
    piglatined.splice(piglatined.length - 1, 0, srcend.reverse);

    if (!wordInfo.case.includes(0) && wordInfo.case.length > 1){
      for (let i =0; i < piglatined.length; i++){
        piglatined[i] = piglatined[i].toUpperCase();
      }
    }
    else{
      for (let i =0; i < piglatined.length; i++){
        if (i < wordInfo.case.length){
          if (wordInfo.case[i]){
            piglatined[i] = piglatined[i].toUpperCase();
          }
          else{
            piglatined[i] = piglatined[i].toLowerCase();
          }
        }
        else{
          piglatined[i] = piglatined[i].toLowerCase();
        }
      }
    }

    piglatined.splice(0, 0, start);
    piglatined.append(end.reverse());
    return piglatined.join("");
  }

}

export default translator
