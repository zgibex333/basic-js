const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && !sampleActivity.includes('-')) {
    let intSampleActivity; 
    if (sampleActivity.includes('.')) {
      intSampleActivity = parseFloat(sampleActivity);
    } else {
      intSampleActivity = parseInt(sampleActivity); 
    }
    if (intSampleActivity <= 0 || intSampleActivity > 15) {
      return false; 
  }
  
   
      if (!isNaN(intSampleActivity)) {
          let numerator = Math.log(MODERN_ACTIVITY/intSampleActivity); 
        let denominator = 0.693/HALF_LIFE_PERIOD
        let number = Math.ceil(numerator/denominator); 
        return number; 
      } else {
        return false
      }
} else {
    return false
}
};
