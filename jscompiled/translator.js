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

var _letter = require('letter.js');

var _letter2 = _interopRequireDefault(_letter);

var _vowels = require('vowels.js');

var _vowels2 = _interopRequireDefault(_vowels);

var _infoExtractor = require('infoExtractor.js');

var _infoExtractor2 = _interopRequireDefault(_infoExtractor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var translator = function () {
  function translator() {
    _classCallCheck(this, translator);
  }

  _createClass(translator, [{
    key: 'execute',
    value: function execute(word) {
      var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var srcend = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

      var wordInfo = self.infoExtractor.execute(word);
      var _word = word.split();
      var newword = "";
      var piglatined = [];
      var appendage = "";

      if (!wordInfo.latin) {
        return word;
      }

      if (!word) {
        return word;
      }

      if (!_letter2.default.includes(_word[_word.length - 1])) {
        var localword = _word;
        localword.pop();
        newword = localword.join("");
        wordInfo.case.pop();
        return self.execute(newword, start, srcend, end + _word[_word.length - 1]);
      }

      if (!_letter2.default.includes(_word[0])) {
        var _localword = _word;
        _localword.splice(0, 1);
        newword = _localword.join("");
        wordInfo.case.splice(0, 1);
        return self.execute(newword, start + _word[0], srcend, end);
      }

      if (!vowel.includes(_word[0])) {
        var _localword2 = _word;
        _localword2.splice(0, 1);
        newword = _localword2.join("");
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
        for (var i = 0; i < piglatined.length; i++) {
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
      piglatined.append(end.reverse());
      return piglatined.join("");
    }
  }]);

  return translator;
}();

exports.default = translator;
