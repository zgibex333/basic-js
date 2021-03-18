const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str) {
    typeof str === 'string' ? str : str = str+=''; 
}

if (options.addition === null) {
    options.addition = 'null'
} else if (options.addition) {
    
    typeof options.addition === 'string' ? options.addition : options.addition = options.addition+''; 
} 

options.separator = options.separator || '+'; 
options.additionSeparator = options.additionSeparator || '|';
arr = []; 
if(!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1; 
}

if(!options.repeatTimes) {
    options.repeatTimes = 1; 
}


for (i = 0; i < options.repeatTimes; i++) {
        arr.push(str);
    }
    console.log(arr);

stringToCount = [];
for (i = 0; i < options.additionRepeatTimes; i++) {
    stringToCount.push(options.addition)
  }
  console.log(stringToCount);

  for(j = 0; j < (options.additionRepeatTimes-1); j++) {
      stringToCount[j] += options.additionSeparator; 
    }
    
  
  for (i = 0; i < options.repeatTimes; i++ ) {
    arr[i] += stringToCount.join('')
}
for(i = 0; i < options.repeatTimes-1; i++) {
    arr[i] += options.separator;
}
return arr.join('')
};