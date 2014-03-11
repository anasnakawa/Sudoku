/// <reference path="typings\jquery\jquery.d.ts" />
$(document).ready(function () {
    ko.extenders["synchCell"] = function (target, cell) {
        //create a writeable computed observable to intercept writes to our observable
        var result = ko.computed({
            read: target,
            write: function (newValue) {
                var current = target();
                if (newValue !== current) {
                    game.set(cell, newValue);
                }
            }
        });

        //initialize with current value to make sure it is rounded appropriately
        result(target());

        //return the new computed observable
        return result;
    };

    var game = Sudoku.newGame(0 /* EASY */);
    game.start();

    var fillBoard = function () {
        var cells = game.getBoard();
        for (var r = 0; r < 9; r++) {
            for (var c = 0; c < 9; c++) {
                var cell = cells[r][c];
                cell.synchData = ko.computed({
                    read: function () {
                        return this.data == 0 ? "" : this.data;
                    },
                    write: function (value) {
                        game.set(this, value);
                        this.data = value;
                    },
                    owner: cell
                });
            }
        }
        return cells;
    };
    var viewModel = { cells: null };
    viewModel.cells = ko.observableArray(fillBoard());
    viewModel["solveSudoku"] = function () {
        if (game.solve()) {
            viewModel.cells(fillBoard());
        } else {
            alert("couldnt solved !!!");
        }
    };

    ko.applyBindings(viewModel);
});
//# sourceMappingURL=main.js.map
