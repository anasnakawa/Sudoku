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
                throw new Error("The game is unable to please  try again");         

        }
        public getBoard():any
        {
            return sudUtils.getShallowCells(this.board.cells);
        }
        public pause()
        { }
        public resume()
        { }
        public restart()
        { }
        public complete() {
        }

        public solve(): boolean {
            return config.solver.solve(this.board);
        }
        hint(pCell: cell) {

        }
        set(pCell: cell, value: number): boolean {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            if (targetCell.type != cellType.SYSTEM) {
                this.board.setCell(pCell.x, pCell.y, value);
                return true;
            }
            else
                return false;
        }
        get(pCell: cell):any
        {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            return sudUtils.getShallowCell(targetCell);
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


