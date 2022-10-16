const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform( arr ) {
  if ( !Array.isArray( arr ) ) throw new Error( `'arr' parameter must be an instance of the Array!` );
  let resultArray = [];
  const lehgth = arr.length - 1;
  for ( let i = 0; i < arr.length; i++ ) {
    resultArray.push(  arr[ i ] );
    console.log( 'resultArray[ i ] =', resultArray[ resultArray.length - 1 ] );
    console.table( 'resultArray =', resultArray );
    switch ( arr[ i ] ) {
      case '--discard-prev':
        resultArray.pop();
        if ( i > 0 ) resultArray.pop();
        break;
      case '--discard-next':
        resultArray.pop();
        if ( i < lehgth ) i += 2;
        break;
      case '--double-prev':
        resultArray.pop();
        if ( i > 0 ) resultArray.push( arr[ i - 1 ] );
        break;
      case '--double-next':
          resultArray.pop();
          if ( i < lehgth ) resultArray.push( arr[ i + 1 ] );
          break;
      default:
        break;
    }
  }
  return resultArray;
}

module.exports = {
  transform
};
