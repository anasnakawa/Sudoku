var Sudoku;
(function (Sudoku) {
    var analyzer = (function () {
        function analyzer() {
        }
        analyzer.isInRow = function (board, targetCell) {
            for (var row = 0; row < 9; row++) {
                if (board.cell(row, targetCell.y) == targetCell.data)
                    return true;
            }
            return false;
        };

        analyzer.isInColumn = function (board, targetCell) {
            for (var column = 0; column < 9; column++) {
                if (board.cell(targetCell.x, column) == targetCell.data)
                    return true;
            }
            return false;
        };
        analyzer.isInSquare = function (board, targetCell) {
            var square = board.getSubSquare(targetCell.x, targetCell.y);
            if (square.cells != null) {
                for (var c = 0; c < square.cells.length; c++) {
                    if (square.cells[c].data == targetCell.data)
                        return true;
                }
            }
            return false;
        };
        analyzer.getPossibleValues = function (board, pX, pY) {
            var possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            for (var c = 0; c < 9; c++)
                possibleValues[board.cell(pX, c)] = 0;

            for (var r = 0; r < 9; r++)
                possibleValues[board.cell(r, pY)] = 0;

            // Remove used numbers in the sub square.
            var square = board.getSubSquare(pX, pY);
            for (var c = 0; c < square.cells.length; c++) {
                possibleValues[square.cells[c].data] = 0;
            }
            return possibleValues;
        };
        return analyzer;
    })();
    Sudoku.analyzer = analyzer;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=analyzer.js.map
