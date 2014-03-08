module Sudoku {
    export class config {
        static generator: baseGenerator = new fixedGenerator(); 
        static solver: baseSolver = new solver(); 
        
    }
    

} 