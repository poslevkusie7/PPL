"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnSquaredIfFoundEven_v3 = exports.returnSquaredIfFoundEven_v2 = exports.findResult = exports.either = exports.bind = exports.isFailure = exports.isOk = exports.makeFailure = exports.makeOk = void 0;
var makeOk = function (value) {
    return ({ tag: "Ok", value: value });
};
exports.makeOk = makeOk;
var makeFailure = function (message) {
    return ({ tag: "Failure", message: message });
};
exports.makeFailure = makeFailure;
var isOk = function (r) {
    return r.tag === "Ok";
};
exports.isOk = isOk;
var isFailure = function (r) {
    return r.tag === "Failure";
};
exports.isFailure = isFailure;
var bind = function (r, f) {
    return (0, exports.isOk)(r) ? f(r.value) : r;
};
exports.bind = bind;
var either = function (r, ifOk, ifFailure) {
    return (0, exports.isOk)(r) ? ifOk(r.value) : ifFailure(r.message);
};
exports.either = either;
//A
var findResult = function (pred, array) {
    return array.length === 0 ? (0, exports.makeFailure)("No element found.") : pred(array[0]) ? (0, exports.makeOk)(array[0]) : (0, exports.findResult)(pred, array.shift());
};
exports.findResult = findResult;
//B
var returnSquaredIfFoundEven_v2 = function (array) {
    return (0, exports.bind)((0, exports.findResult)(function (x) { return x % 2 === 0; }, array), (function (x) { return (0, exports.makeOk)(x * x); }));
};
exports.returnSquaredIfFoundEven_v2 = returnSquaredIfFoundEven_v2;
//C
var returnSquaredIfFoundEven_v3 = function (array) {
    return (0, exports.either)((0, exports.findResult)(function (x) { return x % 2 === 0; }, array), function (x) { return (x * x); }, function (x) { return -1; });
};
exports.returnSquaredIfFoundEven_v3 = returnSquaredIfFoundEven_v3;
