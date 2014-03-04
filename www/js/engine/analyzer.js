var Sudoku;
(function (Sudoku) {
    var analyzer = (function () {
        function analyzer() {
        }
        analyzer.getSubSquare = function (subSquares, pX, pY) {
            return subSquares[analyzer.subSquareIndex[pX][pY]];
        };

        analyzer.prototype.isInRow = function (board, targetCell) {
            for (var row = 0; row < 9; row++) {
                if (board.cells[targetCell.y][row].data == targetCell.data)
                    return true;
            }
            return false;
        };

        analyzer.prototype.isInColumn = function (board, targetCell) {
            for (var column = 0; column < 9; column++) {
                if (board.cells[column][targetCell.x].data == targetCell.data)
                    return true;
            }
            return false;
        };
        analyzer.prototype.isInSquare = function (board, targetCell) {
            var square = analyzer.getSubSquare(board.subSquares, targetCell.x, targetCell.y);
            if (square.cells != null) {
                for (var c = 0; c < square.cells.length; c++) {
                    if (square.cells[c].data == targetCell.data)
                        return true;
                }
            }
            return false;
        };
        analyzer.prototype.getPossibleValues = function (board, pX, pY) {
            var possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            for (var c = 0; c < 9; c++)
                possibleValues[board.cells[c][pX].data] = 0;

            for (var r = 0; r < 9; r++)
                possibleValues[board.cells[pY][r].data] = 0;

            // Remove used numbers in the sub square.
            var square = analyzer.getSubSquare(board.subSquares, pX, pY);
            for (var c = 0; c < square.cells.length; c++) {
                possibleValues[square.cells[c].data] = 0;
            }
            return possibleValues;
        };
        analyzer.subSquareIndex = [
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8]
        ];
        return analyzer;
    })();
    Sudoku.analyzer = analyzer;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=analyzer.js.map
