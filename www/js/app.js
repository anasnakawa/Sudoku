/*!
 * Sudoku Game
 * anas.nakawa@gmail.com
 */
amman.registerModule('app', {
    options: {}
    , create: function () {      
        this.selectedCell = null;
        this.game = Sudoku.newGame(Sudoku.gameLevel.EASY);
        this.game.start();
        this.cells = ko.observableArray(this.fillBoard(this.game));
        this.profitStatus = ko.computed(function () {

            return  "profitWarning" ;
        },this);
      }
    , init: function () {
    }
    , selectCell: function (cell) {
        if (this.selectedCell) {
            this.selectedCell.isActive(false);
        }
        this.selectedCell = cell;
        cell.isActive(true);
    }
    , fillCell: function (value) {
        if (this.game.set(this.selectedCell, value)) {
            this.selectedCell.data(value);
        }
    }
    , solveSudoku: function () {
        if (this.game.solve()) {
            this.cells(this.fillBoard(this.game));
        } else {
            alert("couldnt solved !!!");
        }
    }
    , fillBoard: function (game) {
        var cells = this.game.getBoard();
        for (var r = 0; r < 9; r++) {
            for (var c = 0; c < 9; c++) {

                var cell = cells[r][c];
                cell.data = ko.observable(cell.data == 0 ? " " : cell.data);
                cell.isActive =ko.observable(false);
                //cell.data = ko.observable(cell.data + ',' + cell.x + '' + cell.y);

            }
        }
        return cells;
    }
});



