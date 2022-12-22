"use strict";
exports.__esModule = true;
exports.merge = void 0;
function merge(collection1, collection2) {
    var _a;
    var results = collection1.concat(collection2);
    for (var i = 0; i < results.length; i++) {
        for (var j = 0; j < results.length - i - 1; j++) {
            if (results[j] > results[j + 1]) {
                _a = [results[j + 1], results[j]], results[j] = _a[0], results[j + 1] = _a[1];
            }
        }
    }
    return results;
}
exports.merge = merge;
var array1 = [1, 3, 5, 7];
var array2 = [15, 2, 4, 5, 6, 7];
console.log(merge([0, 1, 3, 2, 4], [2, 3, 4, 5, 0]));
