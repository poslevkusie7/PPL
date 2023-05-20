"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleFunction = exports.time = void 0;
function time(expr) {
    var startTime = performance.now();
    var value = expr();
    var endTime = performance.now();
    var executionTime = endTime - startTime;
    return [value, executionTime];
}
exports.time = time;
function exampleFunction() {
    console.log("Executing example function");
    for (var i = 0; i < 1000000; i++) {
        Math.sqrt(i);
    }
}
exports.exampleFunction = exampleFunction;
var _a = time(exampleFunction), result = _a[0], elapsedTime = _a[1];
console.log(result); // Print the value
console.log(elapsedTime); // Print the execution time in milliseconds
