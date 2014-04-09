module Sudoku {
    export class board {
        //TODO movesHistory
        public subSquares: subSquare[];

        private static subSquareIndex: number[][] =
        [
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
        public cells: cell[][];
        public solCells: number[][];
        constructor() {
        }
        public initialize() {
            this.prepareSubSquares();
            this.prepareCells();
        }

        public solution(pX: number, pY: number, data?: number): any {
            if (typeof data === "number") {
                this.solCells[pX][pY] = data;
            }
            else {
               return this.solCells[pX][pY]
                }
        }

        public cell(pX: number, pY: number, data?: number): number {
            if (typeof data === "number") {
                this.setCell(pX, pY, data);
                return 1;
            }
            else {
                return this.getCell(pX, pY).data;
            }
        }
        public setSystemCell(pX: number, pY: number, data: number) {
            if (data > 0 && data < 10) {
                this.cells[pX][pY].type = cellType.SYSTEM;
                this.cells[pX][pY].data = data;
            }
        }
        public getSubSquare(pX: number, pY: number): subSquare {
            return this.subSquares[board.subSquareIndex[pX][pY]];

        }
        public getCell(pX: number, pY: number) {
            return this.cells[pX][pY];
        }
        public setCell(pX: number, pY: number, data: number) {
            if (data >=0 && data < 10) {
                this.cells[pX][pY].type = cellType.USER;
                this.cells[pX][pY].data = data;
            }
        }
        private prepareSubSquares() {
            this.subSquares = new Array(9);
            for (var s = 0; s < 9; s++) {
                this.subSquares[s] = new subSquare(s);
            }
        }
        private prepareCells() {
            this.cells = new Array(9);
            this.solCells = new Array(9);
            // rows
            for (var r = 0; r < 9; r++) {
                this.cells[r] = new Array(9);
                this.solCells[r] = new Array(9);
                // columns
                for (var c = 0; c < 9; c++) {
                    var eCell = new cell(r, c);
                    this.getSubSquare(r, c).AddCell(eCell);
                    this.cells[r][c] = eCell;
                    this.solCells[r][c] = 0;
                }
            }
        }
        public destroy() {
            //TODO distroy memory            
        }

    }
}