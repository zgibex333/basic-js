const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  
    console.log(arr);
    if (!Array.isArray(arr)) {
        throw new Error('Not Array')
        
    }
  
    let processArr = [...arr]; 
    const result = [];
  
    for (i = 0; i < processArr.length; i++) {
        if (processArr[i] === '--discard-next') {
            processArr[i+1] = 'fuck';
        } else if (processArr[i] === '--discard-prev') {
            result.pop();
        }  else if (processArr[i] === '--double-next') {
            if (typeof processArr[i+1] !== 'undefined') {
                result.push(processArr[i+1]); 
            }
        } else if ((processArr[i] === '--double-prev')) {
            if (typeof processArr[i-1] !== 'undefined') {
                result.push(processArr[i-1]); 
            }
        }
        
        else {
            result.push(processArr[i])
        }
  
       
    }
        
        return result.filter(e => e!=='fuck'); 
  };

