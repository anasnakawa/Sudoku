module Sudoku {
    export class subSquare {
        public cells: cell[];
        public id: number;
        constructor(squareId) {
            this.id = squareId;
        }

    }
}