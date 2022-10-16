const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats( matrix ) {
  const newArray = matrix.flat( 1 )
                          .filter( ( item ) => item == '^^' ? true : false );
  return newArray.length == 0 ? 0 : newArray.length;
}

module.exports = {
  countCats
};
