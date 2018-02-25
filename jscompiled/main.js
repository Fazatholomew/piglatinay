​"use strict";

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

var _translator = require("translator.js");

var _translator2 = _interopRequireDefault(_translator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var piglatin = function () {
  function piglatin() {
    _classCallCheck(this, piglatin);
  }

  _createClass(piglatin, [{
    key: "execute",
    value: function execute(sentence) {
      var wordslist = sentence.split(" ");
      for (var i = 0; i < wordslist.lenght; i++) {
        _translator2.default.execute(wordslist[i]);
      }
    }
  }]);

  return piglatin;
}();

exports.default = piglatin;
