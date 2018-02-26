(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
"use strict";

var _main = require("../js/main.js");

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = new _main2.default();

var elementList = ["div", "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "p", "li", "footer", "span", "button", "a"];
console.log(document.querySelectorAll("div"));
console.log(main.execute("I owe you nothing!"));
for (var i = 0; i < elementList.length; i++) {
  console.log("in");
  var element = document.querySelectorAll(elementList[i].toString());
  console.log(element);
  for (var _i = 0; _i < element.length; _i++) {
    var text = element[_i].innerText;
    element.innerText = main.execute(text);
  }
}

console.log("DID IT!");

},{"../js/main.js":4}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       infoExtractor.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Extract unique information of each word.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       N, Jack, Jimmy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       February 22, 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Marlboro College
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _letters = require('./letters.js');

var _letters2 = _interopRequireDefault(_letters);

var _vowels = require('./vowels.js');

var _vowels2 = _interopRequireDefault(_vowels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var infoExtractor = function () {
  function infoExtractor() {
    _classCallCheck(this, infoExtractor);
  }

  _createClass(infoExtractor, [{
    key: 'case_list',
    value: function case_list(word) {
      var result = [];
      for (var i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
          result.push(1);
        } else if (!_letters2.default.includes(word[i])) {
          result.push(2);
        } else {
          result.push(0);
        }
      }
      return result;
    }
  }, {
    key: 'class_list',
    value: function class_list(word) {
      var result = [];
      for (var i = 0; i < word.length; i++) {
        if (_vowels2.default.includes(word[i])) {
          result.push(1);
        } else {
          result.push(0);
        }
      }
      return result;
    }
  }, {
    key: 'check_latin',
    value: function check_latin(word) {
      var latin = false;
      var list = [];
      for (var i = 0; i < word.length; i++) {
        if (_letters2.default.includes(word[i])) {
          list.push(1);
        } else {
          list.push(0);
        }
      }

      if (list.includes(1)) {
        latin = true;
      }
      return latin;
    }
  }, {
    key: 'execute',
    value: function execute(word) {
      var _word = word.split("");
      var case_list = this.case_list(_word);
      var class_list = this.class_list(_word);
      var check_latin = this.check_latin(_word);
      var wordInfo = {
        case: case_list,
        classl: class_list,
        latin: check_latin
      };
      return wordInfo;
    }
  }]);

  return infoExtractor;
}();

exports.default = infoExtractor;

},{"./letters.js":3,"./vowels.js":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ð', 'Ñ', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'ý', 'þ', 'ÿ', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ć', 'ć', 'Ĉ', 'ĉ', 'Ċ', 'ċ', 'Č', 'č', 'Ď', 'ď', 'Đ', 'đ', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ĝ', 'ĝ', 'Ğ', 'ğ', 'Ġ', 'ġ', 'Ģ', 'ģ', 'Ĥ', 'ĥ', 'Ħ', 'ħ', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ', 'ı', 'Ĳ', 'ĳ', 'Ĵ', 'ĵ', 'Ķ', 'ķ', 'ĸ', 'Ĺ', 'ĺ', 'Ļ', 'ļ', 'Ľ', 'ľ', 'Ŀ', 'ŀ', 'Ł', 'ł', 'Ń', 'ń', 'Ņ', 'ņ', 'Ň', 'ň', 'Ŋ', 'ŋ', 'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ŕ', 'ŕ', 'Ŗ', 'ŗ', 'Ř', 'ř', 'Ś', 'ś', 'Ŝ', 'ŝ', 'Ş', 'ş', 'Š', 'š', 'Ţ', 'ţ', 'Ť', 'ť', 'Ŧ', 'ŧ', 'Ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų', 'Ŵ', 'ŵ', 'Ŷ', 'ŷ', 'Ÿ', 'Ź', 'ź', 'Ż', 'ż', 'Ž', 'ž', 'ſ'];
exports.default = letters;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     main.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Translate text from any webpage into piglatin language.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     N, Jack, Jimmy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     February 22, 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Marlboro College
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _translator2 = require("./translator.js");

var _translator3 = _interopRequireDefault(_translator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _translator = new _translator3.default();

var piglatin = function () {
  function piglatin() {
    _classCallCheck(this, piglatin);
  }

  _createClass(piglatin, [{
    key: "execute",
    value: function execute(sentence) {
      console.log(sentence);
      var wordslist = sentence.split(" ");
      console.log(wordslist);
      var result = [];
      for (var i = 0; i < wordslist.length; i++) {
        result.push(_translator.execute(wordslist[i]));
        console.log("word[" + i + "]: " + result[i]);
      }
      console.log("result: " + result);
      return result.join(" ");
    }
  }]);

  return piglatin;
}();

exports.default = piglatin;

},{"./translator.js":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Translator.js
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Translate words into piglatin.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       N, Jack, Jimmy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       February 23, 2018
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       Marlboro College
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */

var _letters = require('./letters.js');

var _letters2 = _interopRequireDefault(_letters);

var _vowels = require('./vowels.js');

var _vowels2 = _interopRequireDefault(_vowels);

var _infoExtractor = require('./infoExtractor.js');

var _infoExtractor2 = _interopRequireDefault(_infoExtractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var infoExtractor = new _infoExtractor2.default();

var translator = function () {
  function translator() {
    _classCallCheck(this, translator);
  }

  _createClass(translator, [{
    key: 'execute',
    value: function execute(word) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var srcend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

      var wordInfo = infoExtractor.execute(word);
      console.log(wordInfo);
      var _word = word.split("");
      console.log("Translator.js: Splitted Word: " + _word);
      var newword = "";
      var piglatined = [];
      var appendage = "";

      if (!wordInfo.latin) {
        console.log("Translator.js: latin");
        return word;
      }

      if (!word) {
        console.log("Translator.js: !word");
        return word;
      }

      if (!_letters2.default.includes(_word[_word.length - 1])) {
        console.log("Translator.js: last letter");
        var localword = _word.slice(0);
        localword.pop();
        newword = localword.join("");
        wordInfo.case.pop();
        return this.execute(newword, start, srcend, end + _word[_word.length - 1]);
      }

      if (!_letters2.default.includes(_word[0])) {
        console.log("Translator.js: first letter");
        var _localword = _word.slice(0);
        _localword.splice(0, 1);
        newword = _localword.join("");
        wordInfo.case.splice(0, 1);
        return this.execute(newword, start + _word[0], srcend, end);
      }

      if (!_vowels2.default.includes(_word[0])) {
        console.log("Translator.js: first letter vowel");
        var _localword2 = _word.slice(0);
        _localword2.splice(0, 1);
        newword = _localword2.join("");
        console.log("Translator.js: first letter vowel: newword: " + newword);
        wordInfo.classl[wordInfo.classl.length - 1] = wordInfo.classl[0];
        console.log("Translator.js: _word[0] + srcend: " + _word[0] + srcend);
        return this.execute(newword, start, _word[0] + srcend, end);
      } else if (srcend != "") {
        console.log("Translator.js: not last class");
        piglatined = _word;
        appendage = "ay";
      } else if (wordInfo.classl[wordInfo.classl.length - 1]) {
        console.log("Translator.js: last class");
        piglatined = _word;
        appendage = "way";
      }
      console.log("Translator.js: Piglatined: " + piglatined);
      piglatined.push(appendage);
      console.log("Translator.js: Piglatined + appendage: " + piglatined);
      console.log(srcend);
      piglatined.splice(piglatined.length - 1, 0, srcend.split("").reverse().join(""));
      console.log("Translator.js: Piglatined + appendage + splice: " + piglatined);

      if (!wordInfo.case.includes(0) && wordInfo.case.length > 1) {
        for (var i = 0; i < piglatined.length; i++) {
          console.log(piglatined);
          piglatined[i] = piglatined[i].toUpperCase();
        }
      } else {
        for (var _i = 0; _i < piglatined.length; _i++) {
          if (_i < wordInfo.case.length) {
            if (wordInfo.case[_i]) {
              piglatined[_i] = piglatined[_i].toUpperCase();
            } else {
              piglatined[_i] = piglatined[_i].toLowerCase();
            }
          } else {
            piglatined[_i] = piglatined[_i].toLowerCase();
          }
        }
      }

      piglatined.splice(0, 0, start);
      piglatined.push(end.split("").reverse().join(""));
      console.log("Translator.js: Final Piglatined: " + piglatined.join(""));
      return piglatined.join("");
    }
  }]);

  return translator;
}();

exports.default = translator;

},{"./infoExtractor.js":2,"./letters.js":3,"./vowels.js":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u', 'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'È', 'É', 'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ò', 'Ó', 'Ô', 'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'è', 'é', 'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ò', 'ó', 'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ü', 'Ā', 'ā', 'Ă', 'ă', 'Ą', 'ą', 'Ē', 'ē', 'Ĕ', 'ĕ', 'Ė', 'ė', 'Ę', 'ę', 'Ě', 'ě', 'Ĩ', 'ĩ', 'Ī', 'ī', 'Ĭ', 'ĭ', 'Į', 'į', 'İ', 'ı', 'Ĳ', 'ĳ', 'Ō', 'ō', 'Ŏ', 'ŏ', 'Ő', 'ő', 'Œ', 'œ', 'Ũ', 'ũ', 'ũ', 'Ū', 'ū', 'Ŭ', 'ŭ', 'Ů', 'ů', 'Ű', 'ű', 'Ų', 'ų'];
exports.default = vowels;

},{}]},{},[1]);
