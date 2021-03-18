const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let counter = 0; 
  const arrOneDim = matrix.flat(Infinity); 
  arrOneDim.forEach(element => {
    element === '^^' ? counter++ : counter+=0 ; 
});

  return counter; 
};
