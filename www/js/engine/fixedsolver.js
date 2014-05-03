var Sudoku;
(function (Sudoku) {
    var fixedSolver = (function () {
        function fixedSolver(solutionsGetter) {
            this.getAllSolutions = solutionsGetter;
        }
        fixedSolver.prototype.solve = function (board) {
            var succeed = false;
            var game = "";
            var solution = null;
            var userSolution = "";
            var solutions = this.getAllSolutions();

            for (var r = 0; r < 9; r++) {
                for (var c = 0; c < 9; c++) {
                    game += (board.getCell(r, c).orignalData.toString());
                    userSolution += (board.getCell(r, c).data.toString());
                }
            }
            var index = 0;

            for (; index < solutions.length; index++) {
                if (solutions[index]["sud"] == game) {
                    solution = solutions[index]["sol"];
                    break;
                }
            }

            //validate Solution if is valid
            if (solution != null) {
                for (var charIndex = 0; charIndex < solution.length; charIndex++) {
                    if (userSolution.charAt(charIndex) != "0" && userSolution.charAt(charIndex) != solution.charAt(charIndex)) {
                        break;
                    }
                }
                if (charIndex == solution.length) {
                    succeed = true;

                    for (var r = 0; r < 9; r++) {
                        for (var c = 0; c < 9; c++) {
                            board.setSystemCell(r, c, parseInt(solution.charAt((r * 9) + c)));
                        }
                    }
                }
            }

            return succeed;
        };
        return fixedSolver;
    })();
    Sudoku.fixedSolver = fixedSolver;
})(Sudoku || (Sudoku = {}));
//# sourceMappingURL=fixedSolver.js.map
