var Sudoku;
(function (Sudoku) {
    (function (gameLevel) {
        gameLevel[gameLevel["EASY"] = 0] = "EASY";
        gameLevel[gameLevel["MEDIUM"] = 1] = "MEDIUM";
        gameLevel[gameLevel["HARD"] = 2] = "HARD";
        gameLevel[gameLevel["EXTREME"] = 3] = "EXTREME";
    })(Sudoku.gameLevel || (Sudoku.gameLevel = {}));
    var gameLevel = Sudoku.gameLevel;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=gameLevel.js.map
