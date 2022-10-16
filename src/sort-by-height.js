const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let clearNumbers = arr.filter( ( item ) => item != -1 ? true : false )
                        .sort( ( a, b ) => { return +a - +b } );
      let counter = 0;
      arr = arr.map( ( item ) => {
            if ( item != -1  ) { 
                  item = clearNumbers[ counter ];
                  counter++;
                  return item;
            } else {
                  return item;
            };
      } );
      return arr;
}

module.exports = {
  sortByHeight
};
