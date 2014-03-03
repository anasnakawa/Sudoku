var Sudoku;
(function (Sudoku) {
    var cell = (function () {
        function cell() {
        }
        return cell;
    })();
    Sudoku.cell = cell;
    (function (cellType) {
        cellType[cellType["GENERATED"] = 0] = "GENERATED";
        cellType[cellType["USER"] = 1] = "USER";
    })(Sudoku.cellType || (Sudoku.cellType = {}));
    var cellType = Sudoku.cellType;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=cell.js.map
