var Sudoku;
(function (Sudoku) {
    var baseGenerator = (function () {
        function baseGenerator() {
        }
        baseGenerator.prototype.genrate = function (board, level) {
            return true;
        };
        return baseGenerator;
    })();
    Sudoku.baseGenerator = baseGenerator;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=baseGenerator.js.map
