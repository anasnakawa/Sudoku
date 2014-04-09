var Sudoku;
(function (Sudoku) {
    var sudUtils = (function () {
        function sudUtils() {
        }
        sudUtils.getShallowCells = function (cells) {
            var clonedCells = new Array(9);

            for (var r = 0; r < 9; r++) {
                clonedCells[r] = new Array(9);

                for (var c = 0; c < 9; c++) {
                    var cell = cells[r][c];
                    clonedCells[r][c] = sudUtils.getShallowCell(cell);
                }
            }
            return clonedCells;
        };
        sudUtils.getShallowCell = function (cell) {
            return {
                x: cell.x,
                y: cell.y,
                box: cell.square.id,
                type: cell.type,
                data: cell.data
            };
        };
        return sudUtils;
    })();
    Sudoku.sudUtils = sudUtils;
})(Sudoku || (Sudoku = {}));
