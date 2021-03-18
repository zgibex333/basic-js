const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnTime =  3600/ turnsSpeed ; 
    
  const result = {
      turns: Math.pow(2, disksNumber)-1, seconds: Math.floor(turnTime * (Math.pow(2, disksNumber)-1))
  }
  return result; 
};

