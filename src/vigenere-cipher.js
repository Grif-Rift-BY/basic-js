const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  
  constructor( direction = true ) {
    this.direction = direction;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt = ( message, secretKey ) => this.transform( message, secretKey );
  decrypt = ( message, secretKey ) => this.transform( message, secretKey, -1 );

  transform ( message, secretKey, transformDirection = 1) {
    if ( !message || !secretKey ) throw new Error( 'Incorrect arguments!' );

    secretKey = secretKey.toUpperCase();
    message = message.toUpperCase();
    
    const repeatedKey = secretKey.padEnd( message.length, secretKey );
    const incomingMessage = message.replace( /[^A-Z]/gi, '' );

    let  resultMessage = incomingMessage.split( '' )
                                        .map( ( letter, index ) => {

      const indexKeyLetter = this.alphabet.indexOf( repeatedKey[ index ], 0 );
      const indexIncomingLetter = this.alphabet.indexOf( letter, 0 );
      // -1 or +1 value of transformDirection switch between encrypt or decrypt
      let resultLetterIndex = indexIncomingLetter + ( transformDirection * indexKeyLetter );  

      resultLetterIndex = resultLetterIndex > 25 ? resultLetterIndex -= 26 : resultLetterIndex;
      resultLetterIndex = resultLetterIndex < 0 ? resultLetterIndex += 26 : resultLetterIndex;

      return this.alphabet.charAt( resultLetterIndex );
    } );

    for ( let i = 0; i < message.length; i++ ) {
      if ( !this.alphabet.includes( message[ i ], 0 ) ) resultMessage.splice( i, 0, message[ i ] );
    }

    return this.direction == true ? resultMessage.join( '' ) : resultMessage.reverse().join( '' );
  }
}

module.exports = {
  VigenereCipheringMachine
};
