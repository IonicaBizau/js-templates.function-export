/**
 * functionExport
 * Generates a function export template.
 *
 * @name functionExport
 * @function
 * @param {String} name The function name.
 * @param {String} name The function description (optional).
 * @return {String} The rendered template.
 */
module.exports = function (name, desc) {
    return `"use strict"

/**
 * ${name}
 * ${desc || "Sample description"}
 *
 * @name ${name}
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function ${name} (a, b) {
    return a + b;
};`;
};
