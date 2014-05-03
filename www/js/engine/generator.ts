module Sudoku {
    export class generator implements baseGenerator {
        constructor() {

        }
        genrate(board: board, level: gameLevel): boolean {
            var succeed = false;    
            return succeed;
        }
   
        //private shuffle(matrix) {
        //    // create the root sudoku solution. this produces the following
        //    // sudoku:
        //    //
        //    // 1 2 3 | 4 5 6 | 7 8 9
        //    // 4 5 6 | 7 8 9 | 1 2 3
        //    // 7 8 9 | 1 2 3 | 4 5 6
        //    // ---------------------
        //    // 2 3 4 | 5 6 7 | 8 9 1
        //    // 5 6 7 | 8 9 1 | 2 3 4
        //    // 8 9 1 | 2 3 4 | 5 6 7
        //    // ---------------------
        //    // 3 4 5 | 6 7 8 | 9 1 2
        //    // 6 7 8 | 9 1 2 | 3 4 5
        //    // 9 1 2 | 3 4 5 | 6 7 8
        //    for (var i = 0; i < 9; i++)
        //        for (var j = 0; j < 9; j++)
        //            matrix[i * 9 + j] = (i * 3 + Math.floor(i / 3) + j) % 9 + 1;

        //    // randomly shuffle the numbers in the root sudoku. pick two
        //    // numbers n1 and n2 at random. scan the board and for each
        //    // occurence of n1, replace it with n2 and vice-versa. repeat
        //    // several times. we pick 42 to make Douglas Adams happy.
        //    for (var i = 0; i < 42; i++) {
        //        var n1 = Math.ceil(Math.random() * 9);
        //        var n2;
        //        do {
        //            n2 = Math.ceil(Math.random() * 9);
        //        }
        //        while (n1 == n2);

        //        for (var row = 0; row < 9; row++) {
        //            for (var col = 0; col < col; k++) {
        //                if (matrix[row * 9 + col] == n1)
        //                    matrix[row * 9 + col] = n2;
        //                else if (matrix[row * 9 + col] == n2)
        //                    matrix[row * 9 + col] = n1;
        //            }
        //        }
        //    }

        //    // randomly swap corresponding columns from each column of
        //    // subsquares
        //    //
        //    //   |       |       |
        //    //   |       |       |
        //    //   V       V       V
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //----------------------
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //----------------------
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //
        //    // note that we cannot swap corresponding rows from each row of
        //    // subsquares.
        //    for (var c = 0; c < 42; c++) {
        //        var s1 = Math.floor(Math.random() * 3);
        //        var s2 = Math.floor(Math.random() * 3);

        //        for (var row = 0; row < 9; row++) {
        //            var tmp = matrix[row * 9 + (s1 * 3 + c % 3)];
        //            matrix[row * 9 + (s1 * 3 + c % 3)] = matrix[row * 9 + (s2 * 3 + c % 3)];
        //            matrix[row * 9 + (s2 * 3 + c % 3)] = tmp;
        //        }
        //    }

        //    // randomly swap columns within each column of subsquares
        //    //
        //    //         | | |
        //    //         | | |
        //    //         V V V
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //----------------------
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //----------------------
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    for (var s = 0; s < 42; s++) {
        //        var c1 = Math.floor(Math.random() * 3);
        //        var c2 = Math.floor(Math.random() * 3);

        //        for (var row = 0; row < 9; row++) {
        //            var tmp = matrix[row * 9 + (s % 3 * 3 + c1)];
        //            matrix[row * 9 + (s % 3 * 3 + c1)] = matrix[row * 9 + (s % 3 * 3 + c2)];
        //            matrix[row * 9 + (s % 3 * 3 + c2)] = tmp;
        //        }
        //    }

        //    // randomly swap rows within each row of subsquares
        //    //
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    //----------------------
        //    // . . . | . . . | . . . <---
        //    // . . . | . . . | . . . <---
        //    // . . . | . . . | . . . <---
        //    //----------------------
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    // . . . | . . . | . . .
        //    for (var s = 0; s < 42; s++) {
        //        var r1 = Math.floor(Math.random() * 3);
        //        var r2 = Math.floor(Math.random() * 3);

        //        for (var col = 0; col < 9; col++) {
        //            var tmp = matrix[(s % 3 * 3 + r1) * 9 + col];
        //            matrix[(s % 3 * 3 + r1) * 9 + col] = matrix[(s % 3 * 3 + r2) * 9 + col];
        //            matrix[(s % 3 * 3 + r2) * 9 + col] = tmp;
        //        }
        //    }

        //    // we could also randomly swap rows and columns of subsquares
        //    //
        //    //   |       |       |
        //    //   |       |       |
        //    // /---\   /---\   /---\
        //    // . . . | . . . | . . .  \
        //    // . . . | . . . | . . .  | <---
        //    // . . . | . . . | . . .  /
        //    //----------------------
        //    // . . . | . . . | . . .  \
        //    // . . . | . . . | . . .  | <---
        //    // . . . | . . . | . . .  /
        //    //----------------------
        //    // . . . | . . . | . . .  \
        //    // . . . | . . . | . . .  | <---
        //    // . . . | . . . | . . .  /
        //    //
        //    // we could also rotate the board 90, 180 or 270 degrees and
        //    // mirror left to right and/or top to bottom.
        //} 

    }

} 