var Sudoku;
(function (Sudoku) {
    var subSquare = (function () {
        function subSquare(squareId) {
            this.id = squareId;
        }
        return subSquare;
    })();
    Sudoku.subSquare = subSquare;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=subSquare.js.map
