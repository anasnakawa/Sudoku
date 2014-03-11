var Sudoku;
(function (Sudoku) {
    var config = (function () {
        function config() {
        }
        config.generator = new Sudoku.fixedGenerator();
        config.solver = new Sudoku.solver();
        return config;
    })();
    Sudoku.config = config;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=config.js.map
