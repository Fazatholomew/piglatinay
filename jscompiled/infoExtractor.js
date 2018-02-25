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

var _letters = require('letters.js');

var _letters2 = _interopRequireDefault(_letters);

var _vowels = require('vowels.js');

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
      for (var i = 0; i < _word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
          result.push(1);
        } else if (!_letters2.default.includes(word[i])) {
          result.push(0);
        } else {
          result.push(2);
        }
      }
      return result;
    }
  }, {
    key: 'class_list',
    value: function class_list(word) {
      result = [];
      for (var i = 0; i < _word.length; i++) {
        if (vowel.includes(word[i])) {
          result.push(1);
        } else {
          result.push(0);
        }
      }
    }
  }, {
    key: 'check_latin',
    value: function check_latin(word) {
      var latin = false;
      var list = [];
      for (var i = 0; i < word.length; i++) {
        if (_letters2.default.includes(word[i])) {
          list.append(1);
        } else {
          list.append(0);
        }
      }

      if (list.includes(1)) latin = true;

      return latin;
    }
  }, {
    key: 'execute',
    value: function execute(word) {
      var _word = word.split();
      case_list = case_list(_word);
      class_list = class_list(_word);
      check_latin = check_latin(_word);
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
