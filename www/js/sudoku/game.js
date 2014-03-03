var Sudoku;
(function (Sudoku) {
    (function (level) {
        level[level["EASY"] = 0] = "EASY";
        level[level["MEDIUM"] = 1] = "MEDIUM";
        level[level["HARD"] = 2] = "HARD";
        level[level["EXTREME"] = 3] = "EXTREME";
    })(Sudoku.level || (Sudoku.level = {}));
    var level = Sudoku.level;
    var game = (function () {
        function game() {
            this.board = [[9], [9]];
        }
        game.prototype.solve = function () {
        };
        game.prototype.hint = function (pCell) {
        };
        game.prototype.set = function (pCell, value) {
        };
        game.prototype.get = function (pCell) {
        };
        game.prototype.pause = function () {
        };
        game.prototype.resume = function () {
        };
        game.prototype.restart = function (handler) {
        };

        game.prototype.on = function (eventType, handler) {
        };
        game.prototype.onRestart = function (handler) {
        };
        game.prototype.onComplete = function (handler) {
        };
        game.prototype.onPause = function (handler) {
        };
        return game;
    })();
    Sudoku.game = game;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=game.js.map
