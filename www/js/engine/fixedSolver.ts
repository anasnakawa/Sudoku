module Sudoku {
    export class fixedSolver implements baseSolver {
        constructor(solutionsGetter: () => any[]) {
            this.getAllSolutions = solutionsGetter;
        }
        private getAllSolutions: () => any[];
        public solve(board: board): boolean {
            var succeed = false;
            var game: string = "";
            var solution: string = null;
            var userSolution: string = "";
            var solutions = this.getAllSolutions();
            //construct Searcher 
            for (var r = 0; r < 9; r++) {
                // columns
                for (var c = 0; c < 9; c++) {
                    game += (board.getCell(r, c).orignalData.toString());
                    userSolution += (board.getCell(r, c).data.toString());
                }
            }
            var index = 0;
            //find game 
            for (; index < solutions.length; index++) {
                if (solutions[index]["sud"] == game) {
                    solution = solutions[index]["sol"];
                    break;
                }
            }
            //validate Solution if is valid
            if (solution != null) {
                for (var charIndex = 0; charIndex < solution.length; charIndex++) {
                    if (userSolution.charAt(charIndex) !="0" && userSolution.charAt(charIndex) != solution.charAt(charIndex)) {
                        break;
                    }
                }
                if (charIndex == solution.length) {//then its succeed
                    succeed = true;
                    //fill the solution
                    for (var r = 0; r < 9; r++) {
                        for (var c = 0; c < 9; c++) {
                            board.setSystemCell(r, c, parseInt(solution.charAt((r * 9) + c)));
                        }
                    }
                }
            }

            return succeed;
        }


    }
} 