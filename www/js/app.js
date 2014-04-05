/*!
 * Sudoku Game
 * anas.nakawa@gmail.com
 */
/*
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
*/
function fillBoard(newGame) {
  var cells = newGame.getBoard();
  for (var r = 0; r < 9; r++) {
      for (var c = 0; c < 9; c++) {
          var cell = cells[r][c];
          cell.data = ko.observable(cell.data == 0 ? "" : cell.data);
      }
  }
  return cells;
};

function game() {
  var viewModel = {};
  var selectedCell = null;
  var newGame = Sudoku.newGame(0 /* EASY */);
  newGame.start();  

  viewModel["cells"] = ko.observableArray(fillBoard(newGame));
  viewModel["solveSudoku"] = function () {
      if (newGame.solve()) {
          viewModel.cells(fillBoard(newGame));
      } else {
          alert("couldnt solved !!!");
      }
  };

  viewModel["selectCell"]= function(cell) {    
      selectedCell = cell;
  }; 
  viewModel["fillCell"] = function (value) {   
      if (newGame.set(selectedCell, value))
      {
          selectedCell.data(value);
      }
  };
  return viewModel;
}

 var app = {
  board: game()
};