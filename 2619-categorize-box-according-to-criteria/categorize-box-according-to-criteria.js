/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
       const volume = length * width * height;

    const bulky = length >= 10000 ||
                  width >= 10000 ||
                  height >= 10000 ||
                  volume >= 1000000000;

    const heavy = mass >= 100;

    if (bulky && heavy) return "Both";
    if (bulky) return "Bulky";
    if (heavy) return "Heavy";

    return "Neither";
}
