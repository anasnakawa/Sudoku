module Sudoku {
    export interface baseGenerator {
        genrate(board: board, level: gameLevel): boolean;
    }

}
