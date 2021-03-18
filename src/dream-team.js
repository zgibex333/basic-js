const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members)) {
    const result = []
    let namesArr = members.filter(element => typeof element === 'string').map(e => e.replace(/\s/g, '').toUpperCase()).sort(); 
    namesArr.forEach(element => {
      result.push(element[0]); 
    });
    return result.join(''); 
  } else {
    return false; 
  }
};