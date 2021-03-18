const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (booleanCipher) {
    this.booleanCipher = booleanCipher; 
  }

  encrypt(message, key) {
      if (typeof message === 'undefined' || typeof key === 'undefined') {
        throw Error('undefined params')
      }
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
      let wordArr = message.toUpperCase().split(''); 
      if(this.booleanCipher || typeof this.booleanCipher === 'undefined') {
          wordArr
      } else if (!this.booleanCipher) {
          wordArr.reverse();
      }
      let keyArr = key.toUpperCase().split(''); 
      let symbols = []; 
      let stringWithoutSymbols = []; 
      
      //find the symbols 
      
        for(let i = 0; i < wordArr.length; i++) {
          if (!alphabet.includes(wordArr[i])) {
              symbols.push([wordArr[i], i])
          } else {
              stringWithoutSymbols.push(wordArr[i]);
          }
      }
      console.log(stringWithoutSymbols);
      
      
      //changes
      
        if (keyArr.length < stringWithoutSymbols.length ) {
          while (keyArr.length < stringWithoutSymbols.length) {
              keyArr = keyArr.concat(keyArr);
          }
          keyArr.splice(stringWithoutSymbols.length)
          }
      
     
      let resultArr = []; 
      let resultStr = []; 
      
        for(let i = 0; i < stringWithoutSymbols.length; i++) {
          resultArr.push((alphabet.indexOf(stringWithoutSymbols[i]) + alphabet.indexOf(keyArr[i]))%26)
          
      }

      
      resultArr.forEach (e => {
      resultStr.push(alphabet[e])
      })

      symbols.forEach(e => {
          resultStr.splice(e[1], 0, e[0])
      })
      
 
      
      return resultStr.join('');
  }    
  decrypt(message, key) {
    if (typeof message === 'undefined' || typeof key === 'undefined') {
      throw Error('undefined params')
    }

      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); 
      let keyArr = key.toUpperCase().split('');
      let resultStr = message.toUpperCase().split(''); 
      if(this.booleanCipher || typeof this.booleanCipher === 'undefined') {
          resultStr
      } else if (!this.booleanCipher) {
          resultStr.reverse();
      }
      let symbols = []; 
      let stringWithoutSymbols = []; 

      
      
      for(let i = 0; i < resultStr.length; i++) {
          if (!alphabet.includes(resultStr[i])) {
              symbols.push([resultStr[i], i])
          } else {
              stringWithoutSymbols.push(resultStr[i])
          }
      }

      console.log(stringWithoutSymbols);
      
     
      if (keyArr.length < resultStr.length ) {
          while (keyArr.length < resultStr.length) {
              keyArr = keyArr.concat(keyArr);
          }
          keyArr.splice(resultStr.length)
          }  

      const decryptArr = []; 
      const decryptResult = []; 
      
      for (let i = 0; i < stringWithoutSymbols.length; i++) {
              decryptArr.push((alphabet.indexOf(stringWithoutSymbols[i]) + 26 - alphabet.indexOf(keyArr[i]))%26)
          }
          
      decryptArr.forEach (e => {
         decryptResult.push(alphabet[e])
      })
      console.log(decryptResult);
      symbols.forEach(e => {
          decryptResult.splice(e[1], 0, e[0])
      })
     
     
      return decryptResult.join('');
      
  }
}

module.exports = VigenereCipheringMachine;
