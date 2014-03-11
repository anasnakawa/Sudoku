module Sudoku {
    export class subSquare {
        public cells: cell[];
        public id: number;
        constructor(squareId) {
            this.id = squareId;
            this.cells = new Array<cell>(0);

           
        }
        public AddCell(pCell: cell)
        {
            if (this.cells.length <= 9)//then can add to cell
            {
                pCell.square = this;
                this.cells.push(pCell);
            }
        }

    }
}