const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 * assert.equal(calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 31);
            assert.equal(calculateDepth([1, 2, 3, 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 5);
            assert.equal(calculateDepth([1, 2, 3, [8, [2]], 4, 5, []]), 3);
            assert.equal(calculateDepth([1, 2, 3, [1], 4, 5, [1]]), 2);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 25);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]), 4);
            assert.equal(calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]]), 15);
 * 
 * 
 * 
 */
class DepthCalculator {
  calculateDepth( array, maximumNesting = 1) {
    if ( array.some( element => Array.isArray( element ) ) ) {
      array = array.flat( 1 );
      maximumNesting++;
      return this.calculateDepth( array, maximumNesting );
    }
    return maximumNesting;
  }
}

module.exports = {
  DepthCalculator
};
