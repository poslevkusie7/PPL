"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var part2_js_1 = require("/Users/poslevkusie/BGU/PPL/assignment1-4.04/part2.js");
describe("Assignment 1 Part 2", function () {
    describe("countLetters", function () {
        it("counts letters", function () {
            expect((0, part2_js_1.countLetters)("aaabbbb")).toEqual({ "a": 3, "b": 4 });
        });
        it("counts letters", function () {
            expect((0, part2_js_1.countLetters)("AaaBbbb")).toEqual({ "a": 3, "b": 4 });
        });
        it("counts letters", function () {
            expect((0, part2_js_1.countLetters)("ABbbaab")).toEqual({ "a": 3, "b": 4 });
        });
        it("counts letters", function () {
            expect((0, part2_js_1.countLetters)("I am robot")).toEqual({ "i": 1, "a": 1, "m": 1, "r": 1, "o": 2, "b": 1, "t": 1 });
        });
        it("counts letters", function () {
            expect((0, part2_js_1.countLetters)("abcABCaabbcc d")).toEqual({ "a": 4, "b": 4, "c": 4, "d": 1 });
        });
    });
    describe("isPaired", function () {
        it("returns true for a string with paired parens", function () {
            expect((0, part2_js_1.isPaired)("([{}])")).toBe(true);
        });
        it("returns true for a string with paired parens", function () {
            expect((0, part2_js_1.isPaired)("This is ([some]) {text}.")).toBe(true);
        });
        it("returns true for a string with paired parens", function () {
            expect((0, part2_js_1.isPaired)("No parens, no problems.")).toBe(true);
        });
        it("returns true for a string with paired parens", function () {
            expect((0, part2_js_1.isPaired)("[](){}")).toBe(true);
        });
        it("returns false when the parens are not paired", function () {
            expect((0, part2_js_1.isPaired)("(]")).toBe(false);
            expect((0, part2_js_1.isPaired)("This is ]some[ }text{")).toBe(false);
            expect((0, part2_js_1.isPaired)("(")).toBe(false);
            expect((0, part2_js_1.isPaired)(")(")).toBe(false);
            expect((0, part2_js_1.isPaired)("())")).toBe(false);
        });
    });
    describe("treeToSentence", function () {
        it("Represents a tree as a sentence", function () {
            var t1 = { root: "hello", children: [{ root: "world", children: [] }] };
            expect((0, part2_js_1.treeToSentence)(t1)).toBe("hello world");
        });
        it("Represents a tree as a sentence", function () {
            var t2 = { root: "hello", children: [{ root: "there", children: [] }, { root: "!", children: [] }] };
            expect((0, part2_js_1.treeToSentence)(t2)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", function () {
            var t3 = { root: "hello", children: [{ root: "there", children: [{ root: "!", children: [] }] }] };
            expect((0, part2_js_1.treeToSentence)(t3)).toBe("hello there !");
        });
        it("Represents a tree as a sentence", function () {
            var t4 = { root: "hello", children: [] };
            expect((0, part2_js_1.treeToSentence)(t4)).toBe("hello");
        });
        it("Represents a tree as a sentence", function () {
            var t5 = { root: "", children: [] };
            expect((0, part2_js_1.treeToSentence)(t5)).toBe("");
        });
    });
});
