var Sudoku;
(function (Sudoku) {
    var solver = (function () {
        function solver() {
        }
        solver.prototype.solve = function (board) {
            var succeed = false;
            succeed = this.solvebruteForce(board);

            return succeed;
        };
        solver.prototype.solvebruteForce = function (board) {
            var colp = 0;
            var rowp = 0;
            var mValues = null;
            var bestCardinality = 10;

            for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                    if (board.cell(row, col) == 0) {
                        var values = Sudoku.analyzer.getPossibleValues(board, row, col);
                        var cardinality = 0;

                        for (var card = 1; card < 10; card++)
                            cardinality += values[card] == 0 ? 0 : 1;

                        if (cardinality < bestCardinality) {
                            bestCardinality = cardinality;
                            mValues = values;
                            colp = col;
                            rowp = row;
                        }
                    }
                }
            }

            if (bestCardinality == 10)
                return true;

            if (bestCardinality == 0)
                return false;

            for (var i = 1; i < 10; i++) {
                if (mValues[i] != 0) {
                    board.setCell(rowp, colp, mValues[i]);
                    if (this.solvebruteForce(board))
                        return true;
                }
            }

            board.setCell(rowp, colp, 0);
            return false;
        };
        return solver;
    })();
    Sudoku.solver = solver;
})(Sudoku || (Sudoku = {}));
