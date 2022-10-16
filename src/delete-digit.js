const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 * assert.strictEqual(deleteDigit(152), 52);
    assert.strictEqual(deleteDigit(1001), 101);
    assert.strictEqual(deleteDigit(10), 1);
    assert.strictEqual(deleteDigit(222219), 22229);
    assert.strictEqual(deleteDigit(109), 19);
    assert.strictEqual(deleteDigit(342), 42);
 * 
 * 
 */
function deleteDigit( n ) {
  let maximumNumber = 0;
      let digits = ( n = n + '' ).split( '' );
      for ( let i = 0; i < n.length; i++ ) {
        let deletedDigit = digits.slice( i, i + 1 );
        digits.splice( i, 1, '' );
        splicedNumber = digits.join( '' );
        if ( +splicedNumber > maximumNumber ) maximumNumber = +splicedNumber;
        digits.splice( i, 1, deletedDigit );
      }
      return maximumNumber;
}

module.exports = {
  deleteDigit
};
