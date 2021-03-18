const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array : [], 

  getLength() {
      return this.array.length; 
    // remove line with error and write your code here
  },
  addLink(value) {
      typeof value !== 'undefined' ? this.array.push(`( ${value} )`) : this.array.push(`( )`)
    return this; 
    // remove line with error and write your code here
  },
  removeLink(position) {
      if (position % 1 === 0) {
          if (position) {
              this.array.splice(position-1, 1); 
          }
      } else {
        this.array = []
        throw Error('not a number, or a fractional number, or corresponding to a nonexistent link')
      }
    return this; 
    // remove line with error and write your code here
  },
  reverseChain() {
    this.array.reverse(); 
    return this; 
    // remove line with error and write your code here
  },
  finishChain() {
      const result = this.array.join('~~'); 
      this.array = []
    return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
