var Sudoku;
(function (Sudoku) {
    var baseSolver = (function () {
        function baseSolver() {
        }
        baseSolver.prototype.solve = function (board) {
            return true;
        };
        return baseSolver;
    })();
    Sudoku.baseSolver = baseSolver;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=basesolver.js.map
