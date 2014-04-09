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
                throw new Error("The game is unable to please  try again");
        };
        game.prototype.getBoard = function () {
            return Sudoku.sudUtils.getShallowCells(this.board.cells);
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
            return Sudoku.config.solver.solve(this.board);
        };
        game.prototype.hint = function (pCell) {
        };
        game.prototype.set = function (pCell, value) {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            if (targetCell.type != 0 /* SYSTEM */) {
                this.board.setCell(pCell.x, pCell.y, value);
                return true;
            } else
                return false;
        };
        game.prototype.get = function (pCell) {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            return Sudoku.sudUtils.getShallowCell(targetCell);
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
