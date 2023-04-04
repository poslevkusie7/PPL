"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.treeToSentence = exports.isPaired = exports.countLetters = void 0;
//Question 1
var countLetters = function (str) {
    var letterCount = new Map();
    var englishAlphabet = /[A-Za-z]/;
    str.split('').forEach(function (char) {
        if (englishAlphabet.test(char)) {
            var charLowerCase = char.toLowerCase();
            letterCount.set(charLowerCase, (letterCount.get(charLowerCase) || 0) + 1);
        }
    });
    return letterCount;
};
exports.countLetters = countLetters;
var myString = 'A )(ba){n}an(a';
var LettersCount = (0, exports.countLetters)(myString);
console.log(LettersCount);
//Question 2
var isPaired = function (str) {
    var opening = ['(', '{', '['];
    var closing = [')', '}', ']'];
    var stack = [];
    var top = -1;
    for (var i = 0; i < str.length; i++) {
        var bracket = str[i];
        if (opening.indexOf(bracket) !== -1) {
            top++;
            stack[top] = bracket;
        }
        if (closing.indexOf(bracket) !== -1) {
            if (top === -1 || opening.indexOf(stack[top]) !== closing.indexOf(bracket)) {
                return false;
            }
            top--;
        }
    }
    return top === -1;
};
exports.isPaired = isPaired;
var IsPaired = (0, exports.isPaired)(myString);
console.log(IsPaired);
var treeToSentence = function (tree) {
    var output = tree.root;
    output += " ";
    for (var _i = 0, _a = tree.children; _i < _a.length; _i++) {
        var child = _a[_i];
        output += (0, exports.treeToSentence)(child);
    }
    return output;
};
exports.treeToSentence = treeToSentence;
var t1 = {
    root: "Hello",
    children: [
        {
            root: "students",
            children: [
                {
                    root: "how",
                    children: []
                }
            ]
        },
        {
            root: "are",
            children: []
        },
        {
            root: "you?",
            children: []
        },
    ]
};
console.log((0, exports.treeToSentence)(t1)); // ==> Hello students how are you?
