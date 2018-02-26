/*
main.js

Translate text from any webpage into piglatin language.

N, Jack, Jimmy

February 22, 2018
Marlboro College
*/

import translator from "./translator.js"
const _translator = new translator()

class piglatin {
  constructor(){
  }

  execute(sentence){
      console.log(sentence)
    const wordslist = sentence.split(" ");
      console.log(wordslist)
    let result = [];
    for (let i = 0; i < wordslist.length; i++){
      result.push(_translator.execute(wordslist[i]));
      console.log("word[" + i + "]: " + result[i])
    }
      console.log("result: " + result)
      return result.join(" ")
  }

}

export default piglatin
