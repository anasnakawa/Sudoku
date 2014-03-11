var Sudoku;
(function (Sudoku) {
    var board = (function () {
        function board() {
        }
        board.prototype.initialize = function () {
            this.prepareSubSquares();
            this.prepareCells();
        };

        board.prototype.solution = function (pX, pY, data) {
            if (typeof data === "number") {
                this.solCells[pX][pY] = data;
            } else {
                return this.solCells[pX][pY];
            }
        };

        board.prototype.cell = function (pX, pY, data) {
            if (typeof data === "number") {
                this.setCell(pX, pY, data);
                return 1;
            } else {
                return this.getCell(pX, pY).data;
            }
        };
        board.prototype.setSystemCell = function (pX, pY, data) {
            if (data > 0 && data < 10) {
                this.cells[pX][pY].type = 0 /* SYSTEM */;
                this.cells[pX][pY].data = data;
            }
        };
        board.prototype.getSubSquare = function (pX, pY) {
            return this.subSquares[board.subSquareIndex[pX][pY]];
        };
        board.prototype.getCell = function (pX, pY) {
            return this.cells[pX][pY];
        };
        board.prototype.setCell = function (pX, pY, data) {
            if (data >= 0 && data < 10) {
                this.cells[pX][pY].type = 1 /* USER */;
                this.cells[pX][pY].data = data;
            }
        };
        board.prototype.prepareSubSquares = function () {
            this.subSquares = new Array(9);
            for (var s = 0; s < 9; s++) {
                this.subSquares[s] = new Sudoku.subSquare(s);
            }
        };
        board.prototype.prepareCells = function () {
            this.cells = new Array(9);
            this.solCells = new Array(9);

            for (var r = 0; r < 9; r++) {
                this.cells[r] = new Array(9);
                this.solCells[r] = new Array(9);

                for (var c = 0; c < 9; c++) {
                    var eCell = new Sudoku.cell(r, c);
                    this.getSubSquare(r, c).AddCell(eCell);
                    this.cells[r][c] = eCell;
                    this.solCells[r][c] = 0;
                }
            }
        };
        board.prototype.destroy = function () {
            //TODO distroy memory
        };
        board.subSquareIndex = [
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8]
        ];
        return board;
    })();
    Sudoku.board = board;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=board.js.map
