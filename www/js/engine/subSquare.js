var Sudoku;
(function (Sudoku) {
    var subSquare = (function () {
        function subSquare(squareId) {
            this.id = squareId;
            this.cells = new Array(0);
        }
        subSquare.prototype.AddCell = function (pCell) {
            if (this.cells.length <= 9) {
                pCell.square = this;
                this.cells.push(pCell);
            }
        };
        return subSquare;
    })();
    Sudoku.subSquare = subSquare;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=subSquare.js.map
