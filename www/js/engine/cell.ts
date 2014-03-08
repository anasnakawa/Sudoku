module Sudoku {
    export class cell {
        public x: number;
        public y: number;
        public square: subSquare;
        public data: number=0;
        public type: cellType;
        constructor(pX: number, pY: number) {
            this.x = pX;
            this.y = pY;
            
        }
    }
    export enum cellType {
        SYSTEM
        , USER
    }
}