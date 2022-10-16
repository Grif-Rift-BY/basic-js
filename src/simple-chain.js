const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink( value = '' ) {
    this.chain.push( `( ${ value } )` );
    return this;
  },

  removeLink( position ) {
    const errorMessage = `You can't remove incorrect link!`;
    if ( position < 1 || position > this.chain.length ||
        typeof position !== 'number' ||
        !Number.isInteger( position ) ) {
      this.chain.length = 0;
      throw new Error( errorMessage );
    } else {
      this.chain.splice( position - 1, 1 );
    }
    return this;
  },

  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const result = this.chain.join( '~~' );
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};
