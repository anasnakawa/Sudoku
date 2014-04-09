var Sudoku;
(function (Sudoku) {
    var cell = (function () {
        function cell(pX, pY) {
            this.data = 0;
            this.type = 1 /* USER */;
            this.x = pX;
            this.y = pY;
        }
        return cell;
    })();
    Sudoku.cell = cell;
    (function (cellType) {
        cellType[cellType["SYSTEM"] = 0] = "SYSTEM";
        cellType[cellType["USER"] = 1] = "USER";
    })(Sudoku.cellType || (Sudoku.cellType = {}));
    var cellType = Sudoku.cellType;
})(Sudoku || (Sudoku = {}));
