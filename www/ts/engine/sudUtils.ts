module Sudoku {
    export class sudUtils {
        static getShallowCells(cells: cell[][]):any {
            var clonedCells = new Array(9);
            // rows
            for (var r = 0; r < 9; r++) {
                clonedCells[r] = new Array(9);
                // columns
                for (var c = 0; c < 9; c++) {
                    var cell = cells[r][c];
                    clonedCells[r][c] = sudUtils.getShallowCell(cell);
                }
            }
            return clonedCells;
        }
        static getShallowCell(cell: cell):any {
            return {
                x: cell.x
                , y: cell.y             
                , box: cell.square.id
                , type: cell.type
                , data: cell.data
            };
        }
    }

}
