/*
  Translator.js

  Translate words into piglatin.

  N, Jack, Jimmy

  February 23, 2018
  Marlboro College

*/

import letters from './letters.js'
import vowels from './vowels.js'
import info from './infoExtractor.js'

const infoExtractor = new info()

class translator {
  constructor(){
  }

  execute(word,start="",srcend="",end=""){
    const wordInfo = infoExtractor.execute(word);
      console.log(wordInfo)
    let _word = word.split("");
    console.log("Translator.js: Splitted Word: " + _word)
    let newword = "";
    let piglatined = []
    let appendage = ""

    if (!wordInfo.latin){
        console.log("Translator.js: latin")
        return word
    }

    if (!word){
        console.log("Translator.js: !word")
        return word
    }

    if(!letters.includes(_word[_word.length - 1])){
        console.log("Translator.js: last letter")
      let localword = _word.slice(0);
      localword.pop();
      newword = localword.join("");
      wordInfo.case.pop();
      return this.execute(newword, start, srcend, end + _word[_word.length - 1])
    }

    if(!letters.includes(_word[0])){
        console.log("Translator.js: first letter")
      let localword = _word.slice(0);
      localword.splice(0, 1);
      newword = localword.join("");
      wordInfo.case.splice(0, 1);
      return this.execute(newword, start + _word[0], srcend, end)
    }

    if(!vowels.includes(_word[0])){
        console.log("Translator.js: first letter vowel")
      let localword = _word.slice(0);
      localword.splice(0, 1);
      newword = localword.join("");
        console.log("Translator.js: first letter vowel: newword: " + newword)
      wordInfo.classl[wordInfo.classl.length - 1] = wordInfo.classl[0]
        console.log("Translator.js: _word[0] + srcend: " + _word[0] + srcend)
      return this.execute(newword, start, _word[0] + srcend, end)
    }

    else if (srcend != ""){
        console.log("Translator.js: not last class")
      piglatined = _word;
      appendage = "ay"
    }

    else if (wordInfo.classl[wordInfo.classl.length - 1]){
        console.log("Translator.js: last class")
      piglatined = _word;
      appendage = "way"
    }
      console.log("Translator.js: Piglatined: " + piglatined)
    piglatined.push(appendage);
      console.log("Translator.js: Piglatined + appendage: " + piglatined)
      console.log(srcend);
    piglatined.splice(piglatined.length - 1, 0, srcend.split("").reverse().join(""));
      console.log("Translator.js: Piglatined + appendage + splice: " + piglatined)
      
    if (!wordInfo.case.includes(0) && wordInfo.case.length > 1){
      for (let i = 0; i < piglatined.length; i++){
          console.log(piglatined)
        piglatined[i] = piglatined[i].toUpperCase();
      }
    }
    else{
      for (let i = 0; i < piglatined.length; i++){
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
    piglatined.push(end.split("").reverse().join(""));
      console.log("Translator.js: Final Piglatined: " + piglatined.join(""))
    return piglatined.join("");
  }

}

export default translator
