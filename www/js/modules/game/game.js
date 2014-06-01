/*!
 * game main module
 */

amman.module( 'game', {
    options: {}
    , create: function () {      
        this.selectedCell = ko.observable(null);
        this.game = Sudoku.newGame(Sudoku.gameLevel.EASY);
        this.game.start();
        this.cells = ko.observableArray(this.fillBoard(this.game)); 
    }
    , render: function () {}
    , selectCell: function (cell) {
        if (this.selectedCell()) {
            this.selectedCell().isActive(false);
        }
        this.selectedCell(cell);
        cell.isActive(true);
    }
    , fillCell: function (value) {
        if (this.game.set(this.selectedCell(), value)) {
            this.selectedCell().data(value);
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
        var boxes = this.game.getBoardBoxes();
        for (var box = 0; box < 9; box++) {
            for (var c = 0; c < 9; c++) {
                var cell = boxes[box][c];
                cell.data = ko.observable(cell.data == 0 ? " " : cell.data);
                cell.isActive =ko.observable(false);
                //cell.data = ko.observable(cell.data + ',' + cell.x + '' + cell.y);      
            }
        }
        return boxes;
    }
});



