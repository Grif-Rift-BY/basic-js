const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
      if ( str == '' ) return '';
      let array = [];
      str = str.split( '' );
      const result = str.reduce( ( accumulator, item, index ) => {
            if ( item == accumulator[ accumulator.length - 1 ] ) {
                  if ( str.length - 1 == index ) array.push( accumulator + item );  
                  return accumulator = accumulator + item;
            } else {
                  array.push( accumulator );
                  if ( str.length - 1 == index ) array.push( item );
                  return accumulator = item;
            }
      } );
      console.log( 'array =', array );
      array = array.reduce( ( accumulator, item ) => {
            if ( item.length == 1 ) return accumulator = accumulator + item[ 0 ];
            accumulator = accumulator + item.length + item[ 0 ];
            return accumulator;
      }, '');
      return array;
}

module.exports = {
  encodeLine
};
