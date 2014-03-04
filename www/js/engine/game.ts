module Sudoku {
    export enum level {
        EASY
        , MEDIUM
        , HARD
        , EXTREME
    }
    export class game {
        constructor() {      
            this.board = new board();
            this.prepareSubSquares();
            this.prepareCells();     
        }               
        private board: board;
        private prepareSubSquares() {
            this.board.subSquares = new Array(9);             
            for (var s = 0; s < 9; s++) {
                this.board.subSquares[s] = new subSquare(s);
            }
        }
        private getSubSquare(pX: number, pY: number): subSquare {                   
            return analyzer.getSubSquare(this.board.subSquares,pX, pY);            
        }
        private prepareCells()
        {
            this.board.cells  = new Array(9);
            // rows
            for (var r = 0; r < 9; r++) {
                this.board.cells [r] = new Array(9);
                // columns
                for (var c = 0; c < 9; c++) {
                    var eCell = new cell(r, c);
                    this.getSubSquare(r, c).AddCell(eCell);
                    this.board.cells [r][c] = eCell;
                }
            }
        }
        solve()
        { }
        hint(pCell: cell) {

        }
        set(pCell: cell, value: number)
        { }
        get(pCell: cell)
        { }
        start() {
           
        }
        pause()
        { }
        resume()
        { }
        restart()
        { }
        complete() {
        }
        on(eventType, handler)
        { }
        onRestart(handler)
        { }
        onComplete(handler)
        { }
        onPause(handler)// (n: number) => any
        { }

    }
}


