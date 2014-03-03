module Sudoku {
    export enum level {
        EASY
        , MEDIUM
        , HARD
        , EXTREME
    }    
    export class game {
     
        constructor() {
        }
        board: number[][] = [[9], [9]];
        solve()
        { }
        hint(pCell: cell)
        { }
        set(pCell: cell, value: number)
        { }
        get(pCell: cell)
        { }
        pause()
        { }
        resume()
        { }
        restart(handler)
        { }

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


