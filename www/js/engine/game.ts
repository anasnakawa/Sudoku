module Sudoku {
    export class game {
        private board: board;
        private level: gameLevel;
        constructor(pLevel: gameLevel) {
            this.level = pLevel;
            this.board = new board();
            this.board.initialize();
        }
        public start() {
            if (!config.generator.genrate(this.board, this.level))
                throw new Error("The game is unable to please start try again");

        }
        public pause()
        { }
        public resume()
        { }
        public restart()
        { }
        public complete() {
        }

        public solve() {
            if (!config.solver.solve(this.board))
                throw new Error("The game is unable to solve !!!");

        }
        hint(pCell: cell) {

        }
        set(pCell: cell, value: number)
        { }
        get(pCell: cell)
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


