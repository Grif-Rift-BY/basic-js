const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
const LOG_OF_TWO = 0.693;

function dateSample( number ) {
  if ( arguments.length == 0 ) return false;
  if ( typeof number != 'string' ) return false;
  if ( isNaN( +number ) ) return false;
  const age = Math.ceil( Math.log( MODERN_ACTIVITY / (+number) ) / ( LOG_OF_TWO / HALF_LIFE_PERIOD ) );
  if ( isNaN( age ) || age == Infinity || age <= 0 ) return false;
  return age;
}

module.exports = {
  dateSample
};
