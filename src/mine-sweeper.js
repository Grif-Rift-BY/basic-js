const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],npm 
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  for (let i = 0; i < matrix.length; i++ ) {
    matrix[ i ].unshift( '0' );
    matrix[ i ].push( '0' );
}
const border = new Array( matrix[ 0 ].length);
matrix.unshift( border );
matrix.push( border );
for ( let i = 1; i < matrix.length - 1; i++ ) {
    for ( let j = 1; j < matrix[ i ].length - 1; j++ ) {
          
          if ( matrix[ i ][ j ] === false ) {
                let counter = 0;
                if ( matrix[ i ][ j + 1 ] === true ) counter++;
                if ( matrix[ i + 1 ][ j + 1 ] === true ) counter++;
                if ( matrix[ i + 1 ][ j ] === true ) counter++;
                if ( matrix[ i + 1 ][ j - 1 ] === true ) counter++;
                if ( matrix[ i ][ j - 1 ] === true ) counter++;
                if ( matrix[ i - 1 ][ j - 1 ] === true ) counter++;
                if ( matrix[ i - 1 ][ j ] === true ) counter++;
                if ( matrix[ i ].length && matrix[ i - 1 ][ j + 1 ] === true ) counter++;
                matrix[ i ][ j ] = counter;
          }
    }
}
for ( let i = 1; i < matrix.length - 1; i++ ) {
    for ( let j = 1; j < matrix[ i ].length - 1; j++ ) {
          
          if ( matrix[ i ][ j ] === true ) {
                matrix[ i ][ j ] = 1;
          }
    }
}
matrix.shift();
matrix.pop();
for (let i = 0; i < matrix.length; i++ ) {
    matrix[ i ].shift();
    matrix[ i ].pop();
}
console.table ( matrix );
return matrix;
}

module.exports = {
  minesweeper
};
