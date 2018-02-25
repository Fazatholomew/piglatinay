/*
  infoExtractor.js

  Extract unique information of each word.

  N, Jack, Jimmy

  February 22, 2018
  Marlboro College
*/

import letters from 'letters.js';
import vowels from 'vowels.js';

class infoExtractor {
  constructor() {}
  case_list(word) {
    let result = [];
    for (let i = 0; i < _word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        result.push(1);
      } else if (!letters.includes(word[i])) {
        result.push(0);
      } else {
        result.push(2);
      }
    }
    return result;
  }

  class_list(word) {
    result = [];
    for (let i = 0; i < _word.length; i++) {
      if (vowel.includes(word[i])) {
        result.push(1);
      } else {
        result.push(0);
      }
    }
  }

  check_latin(word) {
    let latin = false;
    let list = [];
    for (let i = 0; i < word.length; i++) {
      if (letters.includes(word[i])) {
        list.append(1);
      } else {
        list.append(0);
      }
    }

    if (list.includes(1)) latin = true;

    return latin;
  }

  execute(word) {
    const _word = word.split();
    case_list = case_list(_word);
    class_list = class_list(_word);
    check_latin = check_latin(_word);
    const wordInfo = {
      case: case_list,
      classl: class_list,
      latin: check_latin
    };
    return wordInfo;
  }

}

export default infoExtractor;
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'Ĉ', 'ĉ', 'Ċ', 'ċ', 'Č', 'č', 'Ď', 'ď', 'Đ', 'đ', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ĝ', 'ĝ', 'Ğ', 'ğ', 'Ġ', 'ġ', 'Ģ', 'ģ', 'Ĥ', 'ĥ', 'Ħ', 'ħ', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ', 'ı', 'Ĳ', 'ĳ', 'Ĵ', 'ĵ', 'Ķ', 'ķ', 'ĸ', 'Ĺ', 'ĺ', 'Ļ', 'ļ', 'Ľ', 'ľ', 'Ŀ', 'ŀ', 'Ł', 'ł', 'Ń', 'ń', 'Ņ', 'ņ', 'Ň', 'ň', 'Ŋ', 'ŋ', 'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ŕ', 'ŕ', 'Ŗ', 'ŗ', 'Ř', 'ř', 'Ś', 'ś', 'Ŝ', 'ŝ', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ', 'Ť', 'ť', 'Ŧ', 'ŧ', 'Ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų', 'Ŵ', 'ŵ', 'Ŷ', 'ŷ', 'Ÿ', 'Ź', 'ź', 'Ż', 'ż', 'Ž', 'ž', 'ſ'];
export default letters;
/*
main.js

Translate text from any webpage into piglatin language.

N, Jack, Jimmy

February 22, 2018
Marlboro College
*/

import translator from "translator.js";

class piglatin {
  constructor() {}

  execute(sentence) {
    const wordslist = sentence.split(" ");
    for (let i = 0; i < wordslist.lenght; i++) {
      translator.execute(wordslist[i]);
    }
  }

}

export default piglatin;
/*
  Translator.js

  Translate words into piglatin.

  N, Jack, Jimmy

  February 23, 2018
  Marlboro College

*/

import letters from 'letter.js';
import vowels from 'vowels.js';
import infoExtractor from 'infoExtractor.js';

class translator {
  constructor() {}

  execute(word, start = '', srcend = '', end = '') {
    const wordInfo = self.infoExtractor.execute(word);
    let _word = word.split();
    let newword = "";
    let piglatined = [];
    let appendage = "";

    if (!wordInfo.latin) {
      return word;
    }

    if (!word) {
      return word;
    }

    if (!letters.includes(_word[_word.length - 1])) {
      let localword = _word;
      localword.pop();
      newword = localword.join("");
      wordInfo.case.pop();
      return self.execute(newword, start, srcend, end + _word[_word.length - 1]);
    }

    if (!letters.includes(_word[0])) {
      let localword = _word;
      localword.splice(0, 1);
      newword = localword.join("");
      wordInfo.case.splice(0, 1);
      return self.execute(newword, start + _word[0], srcend, end);
    }

    if (!vowel.includes(_word[0])) {
      let localword = _word;
      localword.splice(0, 1);
      newword = localword.join("");
      wordInfo.classl[classl.length - 1] = wordInfo.classl[0];
      return self.execute(newword, start, _word[0] + srcend, end);
    } else if (!wordInfo.classl[classl.length - 1]) {
      piglatined = _word;
      appendage = "ay";
    } else if (wordInfo.classl[classl.length - 1]) {
      piglatined = _word;
      appendage = "way";
    }

    piglatined.append(appendage);
    piglatined.splice(piglatined.length - 1, 0, srcend.reverse);

    if (!wordInfo.case.includes(0) && wordInfo.case.length > 1) {
      for (let i = 0; i < piglatined.length; i++) {
        piglatined[i] = piglatined[i].toUpperCase();
      }
    } else {
      for (let i = 0; i < piglatined.length; i++) {
        if (i < wordInfo.case.length) {
          if (wordInfo.case[i]) {
            piglatined[i] = piglatined[i].toUpperCase();
          } else {
            piglatined[i] = piglatined[i].toLowerCase();
          }
        } else {
          piglatined[i] = piglatined[i].toLowerCase();
        }
      }
    }

    piglatined.splice(0, 0, start);
    piglatined.append(end.reverse());
    return piglatined.join("");
  }

}

export default translator;
const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ', 'ı', 'Ĳ', 'ĳ', 'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ũ', 'ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų'];
export default vowels;
