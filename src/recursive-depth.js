const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(array) { 
    let self = this; 
     return Array.isArray(array) ? 1 + array.reduce(function(a, b) {
       return Math.max(a, self.calculateDepth(b));
     }, 0) : 0;
 }
};