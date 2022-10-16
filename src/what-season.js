const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if ( !date ) return 'Unable to determine the time of year!';
  if ( !date.getMonth || Object.keys(date).length > 0 ) throw new Error('Invalid date!');
  const seasons = [ 'winter', 'spring', 'summer', 'autumn' ];
  const month = date.getMonth();
  const index = Math.floor( ( ( month === 11 ? 0 : month + 1 ) / 3 ) );
  return seasons[ index ];
}

module.exports = {
  getSeason
};
