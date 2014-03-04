module Sudoku {
    export class subSquare {
        public cells: cell[];
        public id: number;
        constructor(squareId) {
            this.id = squareId;
           
        }
        public AddCell(pCell: cell)
        {
            if (this.cells.length < 9)//then can add ne cell
            {
                pCell.square = this;
                this.cells.push(pCell);
            }
        }

    }
}