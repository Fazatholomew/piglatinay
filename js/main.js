/*
main.js

Translate text from any webpage into piglatin language.

N, Jack, Jimmy

February 22, 2018
Marlboro College
*/

import translator from "translator.js"

class piglatin {
  constructor(){
  }

  execute(sentence){
    const wordslist = sentence.split(" ");
    for (let i = 0; i < wordslist.lenght; i++){
      translator.execute(wordslist[i]);
    }
  }

}

export default piglatin
