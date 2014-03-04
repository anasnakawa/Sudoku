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
            this.board = new Sudoku.board();
            this.prepareSubSquares();
            this.prepareCells();
        }
        game.prototype.prepareSubSquares = function () {
            this.board.subSquares = new Array(9);
            for (var s = 0; s < 9; s++) {
                this.board.subSquares[s] = new Sudoku.subSquare(s);
            }
        };
        game.prototype.getSubSquare = function (pX, pY) {
            return Sudoku.analyzer.getSubSquare(this.board.subSquares, pX, pY);
        };
        game.prototype.prepareCells = function () {
            this.board.cells = new Array(9);

            for (var r = 0; r < 9; r++) {
                this.board.cells[r] = new Array(9);

                for (var c = 0; c < 9; c++) {
                    var eCell = new Sudoku.cell(r, c);
                    this.getSubSquare(r, c).AddCell(eCell);
                    this.board.cells[r][c] = eCell;
                }
            }
        };
        game.prototype.solve = function () {
        };
        game.prototype.hint = function (pCell) {
        };
        game.prototype.set = function (pCell, value) {
        };
        game.prototype.get = function (pCell) {
        };
        game.prototype.start = function () {
        };
        game.prototype.pause = function () {
        };
        game.prototype.resume = function () {
        };
        game.prototype.restart = function () {
        };
        game.prototype.complete = function () {
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
