const functionExport = require("../lib");

console.log(functionExport("foo"));
// "use strict";
//
// /**
//  * foo
//  * Sample description
//  *
//  * @name foo
//  * @function
//  * @param {Number} a Param descrpition.
//  * @param {Number} b Param descrpition.
//  * @return {Number} Return description.
//  */
// module.exports = function foo (a, b) {
//     return a + b;
// };

console.log(functionExport("bar", "Function description"));
// "use strict";
//
// /**
//  * bar
//  * Function description
//  *
//  * @name bar
//  * @function
//  * @param {Number} a Param descrpition.
//  * @param {Number} b Param descrpition.
//  * @return {Number} Return description.
//  */
// module.exports = function bar (a, b) {
//     return a + b;
// };
