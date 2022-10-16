const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {
  str = str + '';
  let repeatTimes = ( options.hasOwnProperty( 'repeatTimes' ) ) ? options.repeatTimes : 1;
  let separator = ( options.hasOwnProperty( 'separator' ) ) ? options.separator : '+';
  let addition = ( ( options.hasOwnProperty( 'addition' ) ) ? options.addition : '' ) + '';
  let additionRepeatTimes = ( options.hasOwnProperty( 'additionRepeatTimes' ) ) ? options.additionRepeatTimes : 1;
  let additionSeparator = ( options.hasOwnProperty( 'additionSeparator' ) ) ? options.additionSeparator : '|';

  let finishAddition = [];
  for (let i = 0; i < additionRepeatTimes; i++) { finishAddition.push( addition ); finishAddition.push( additionSeparator ); }
  finishAddition.pop(); finishAddition = finishAddition.join( '' );
  
  let finishString = [];
  for (let i = 0; i < repeatTimes; i++) { finishString.push( str + finishAddition ); finishString.push( separator ); }
  finishString.pop();  finishString = finishString.join( '' );

  return finishString;
}

module.exports = {
  repeater
};
