module Sudoku {
    export class cell {
        public x: number;
        public y: number;
        public square: subSquare;
        public data: number;
        public type: cellType;
        constructor() {
        }
    }
    export enum cellType {
        GENERATED
        , USER
    }
}