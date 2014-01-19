/*!
 * Sudoku Game
 * anas.nakawa@gmail.com
 */

function rowFactory() {

}

function columnFactory( values ) {
  for( var i = 0, len = values.length; i < len; i++ ) {
    values[ i ] = cellFactory( values[ i ] );
  }
}

function cellFactory( value ) {
  return {
    value: ko.observable( value )
  }
}

function game() {
  var temp = new Array(9);
  // rows
  for( var r = 0; r < 9; r++ ) {
    temp[ r ] = new Array(9);
    // columns
    for( var c = 0; c < 9; c++ ) {
      temp[ r ][ c ] = _.random( 8 );
    }
  }
  return temp;
}

var app = {
  board: game()
};