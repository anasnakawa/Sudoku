var Sudoku;
(function (Sudoku) {
    var game = (function () {
        function game(pLevel) {
            this.level = pLevel;
            this.board = new Sudoku.board();
            this.board.initialize();
        }
        game.prototype.start = function () {
            if (!Sudoku.config.generator.genrate(this.board, this.level))
                throw new Error("The game is unable to please start try again");
        };
        game.prototype.pause = function () {
        };
        game.prototype.resume = function () {
        };
        game.prototype.restart = function () {
        };
        game.prototype.complete = function () {
        };

        game.prototype.solve = function () {
            if (!Sudoku.config.solver.solve(this.board))
                throw new Error("The game is unable to solve !!!");
        };
        game.prototype.hint = function (pCell) {
        };
        game.prototype.set = function (pCell, value) {
        };
        game.prototype.get = function (pCell) {
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
