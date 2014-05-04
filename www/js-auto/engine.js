var Sudoku;
(function (Sudoku) {
    (function (gameLevel) {
        gameLevel[gameLevel["EASY"] = 0] = "EASY";
        gameLevel[gameLevel["MEDIUM"] = 1] = "MEDIUM";
        gameLevel[gameLevel["HARD"] = 2] = "HARD";
        gameLevel[gameLevel["EXTREME"] = 3] = "EXTREME";
    })(Sudoku.gameLevel || (Sudoku.gameLevel = {}));
    var gameLevel = Sudoku.gameLevel;
})(Sudoku || (Sudoku = {}));



var Sudoku;
(function (Sudoku) {
    var cell = (function () {
        function cell(pX, pY) {
            this.data = 0;
            this.type = 1 /* USER */;
            this.x = pX;
            this.y = pY;
        }
        return cell;
    })();
    Sudoku.cell = cell;
    (function (cellType) {
        cellType[cellType["SYSTEM"] = 0] = "SYSTEM";
        cellType[cellType["USER"] = 1] = "USER";
    })(Sudoku.cellType || (Sudoku.cellType = {}));
    var cellType = Sudoku.cellType;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var subSquare = (function () {
        function subSquare(squareId) {
            this.id = squareId;
            this.cells = new Array(0);
        }
        subSquare.prototype.AddCell = function (pCell) {
            if (this.cells.length <= 9) {
                pCell.square = this;
                this.cells.push(pCell);
            }
        };
        return subSquare;
    })();
    Sudoku.subSquare = subSquare;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var board = (function () {
        function board() {
        }
        board.prototype.initialize = function () {
            this.prepareSubSquares();
            this.prepareCells();
        };

        board.prototype.solution = function (pX, pY, data) {
            if (typeof data === "number") {
                this.solCells[pX][pY] = data;
            } else {
                return this.solCells[pX][pY];
            }
        };

        board.prototype.cell = function (pX, pY, data) {
            if (typeof data === "number") {
                this.setCell(pX, pY, data);
                return 1;
            } else {
                return this.getCell(pX, pY).data;
            }
        };
        board.prototype.setSystemCell = function (pX, pY, data) {
            if (data > 0 && data < 10) {
                this.cells[pX][pY].type = 0 /* SYSTEM */;
                this.cells[pX][pY].data = data;
            }
        };
        board.prototype.getSubSquare = function (pX, pY) {
            return this.subSquares[board.subSquareIndex[pX][pY]];
        };
        board.prototype.getCell = function (pX, pY) {
            return this.cells[pX][pY];
        };
        board.prototype.setCell = function (pX, pY, data) {
            if (data >= 0 && data < 10) {
                this.cells[pX][pY].type = 1 /* USER */;
                this.cells[pX][pY].data = data;
            }
        };
        board.prototype.prepareSubSquares = function () {
            this.subSquares = new Array(9);
            for (var s = 0; s < 9; s++) {
                this.subSquares[s] = new Sudoku.subSquare(s);
            }
        };
        board.prototype.prepareCells = function () {
            this.cells = new Array(9);
            this.solCells = new Array(9);

            for (var r = 0; r < 9; r++) {
                this.cells[r] = new Array(9);
                this.solCells[r] = new Array(9);

                for (var c = 0; c < 9; c++) {
                    var eCell = new Sudoku.cell(r, c);
                    this.getSubSquare(r, c).AddCell(eCell);
                    this.cells[r][c] = eCell;
                    this.solCells[r][c] = 0;
                }
            }
        };
        board.prototype.destroy = function () {
        };
        board.subSquareIndex = [
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [0, 0, 0, 1, 1, 1, 2, 2, 2],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [3, 3, 3, 4, 4, 4, 5, 5, 5],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8],
            [6, 6, 6, 7, 7, 7, 8, 8, 8]
        ];
        return board;
    })();
    Sudoku.board = board;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var sudUtils = (function () {
        function sudUtils() {
        }
        sudUtils.getShallowCells = function (cells) {
            var clonedCells = new Array(9);

            for (var r = 0; r < 9; r++) {
                clonedCells[r] = new Array(9);

                for (var c = 0; c < 9; c++) {
                    var cell = cells[r][c];
                    clonedCells[r][c] = sudUtils.getShallowCell(cell);
                }
            }
            return clonedCells;
        };
        sudUtils.getShallowCell = function (cell) {
            return {
                x: cell.x,
                y: cell.y,
                box: cell.square.id,
                type: cell.type,
                data: cell.data
            };
        };
        return sudUtils;
    })();
    Sudoku.sudUtils = sudUtils;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var fixedGenerator = (function () {
        function fixedGenerator() {
            this.MEDIUM = [];
            this.HARD = [];
            this.EXTREME = [];
            this.EASY = [
                "000105000140000670080002400063070010900000003010090520007200080026000035000409000",
                "000004028406000005100030600000301000087000140000709000002010003900000507670400000",
                "400010000000309040070005009000060021004070600190050000900400070030608000000030006",
                "309000400200709000087000000750060230600904008028050041000000590000106007006000104",
                "000704005020010070000080002090006250600070008053200010400090000030060090200407000",
                "000041000060000200000000000320600000000050041700000000000200300048000000501000000",
                "002090300805000000100000000090060040000000058000000001070000200300500000000100000",
                "000000000001900500560310090100600028004000700270004003040068035002005900000000000",
                "300000000970010000600583000200000900500621003008000005000435002000090056000000001",
                "000921003009000060000000500080403006007000800500700040003000000020000700800195000",
                "093004560060003140004608309981345000347286951652070483406002890000400010029800034",
                "123000587005817239987000164051008473390750618708100925076000891530081746810070352",
                "036210840800045631014863009287030456693584000145672398408396000350028064060450083",
                "004630500605401003370059640938060154457198362216345987043506019060903405509014036",
                "645010893738459621219638745597060184481975000326841579902080010803190000164020908",
                "050030602642895317037020800023504700406000520571962483214000900760109234300240170",
                "008003102002810306314260980923648700476351298185900634047030820209080500801700460",
                "804537000023614085605982034000105870500708306080203450200859003050371208008426507",
                "506094003000086925892513647738629050154378296629451738987145362000960000000830009",
                "093824560085600002206075008321769845000258300578040296850016723007082650002507180",
                "300052000250300010004607523093200805570000030408035060005408300030506084840023056",
                "290000830000020970000109402845761293600000547009045008903407000060030709050000384",
                "023401967006702100170690020749120006001960700000047091030076010007014800010209670",
                "587412693206037800100008200002001748050724900714800500005240109001085400420170305",
                "923407015876050924500200030769020140432000059185004260098042071207030486000708092",
                "986721345304956007007030960073065009690017003100390276000679030069143700731582694",
                "024090008800402900719000240075804300240900587038507604082000059007209003490050000",
                "760005804530400060849006050307060205256710003904050607423600570695007000178500026",
                "100480003070156492400370186729564318504031009010290045007040901040913067901020004",
                "100390004029000300000502800016000570900000006042000080000139000695000731231756008",
                "592178346063245089840936050006852904904617508085394600059481060400063890608029400",
                "200008001194762835000010042470000020009200100020000059658927010913654287742183596",
                "617304800485010307923857641359040078164078530278030064592761483841003706736480010",
                "400052008708300002900080040596127384187030256004568719840000005000003801000895400",
                "004302985080100006000800041900600500036950070057008693590000007000509060602700859",
                "092001750500200008000030200075004960200060075069700030008090020700003089903800040",
                "400052008708300002900080040596127384187030256004568719840000005000003801000895400",
                "620050030000920150015004000003000600180000075062000300001249700296785413040060592",
                "000602400002403600000080021070000840309040207045000030500060000003159780008204500",
                "010600000000103207400950006745869000829000465100524978600090004201406000004000680",
                "080000070001800009270961005100082700007413500008790003300248007800000200742000060",
                "900008503080020097006000004300406002060080359800203001700860205650070018008500006",
                "005907600090000080000830490010580000009000300000096010452018000030000040007400200",
                "215800060400625000006300000950080040002947000040530092000053406524768931060400058",
                "520800367709630050600725009006080700800056003002070600100542906090068500065007040",
                "006019500907068043080000000804190000000645800000802904000006420540001607002984300",
                "150432069904186005003070004002000040000090002030020500000000400346750008810240056",
                "092400018846312597100900002000601004610040080704809000200003006001064820460000070",
                "002006500400000023000002406978060312613729845245010679800900200320600054004200008",
                "300000709019070005076090030090086301108000600600410050080060203700030086963000007",
                "060000509002400600905000070009010086000206905056080700090000162008007493604000857",
                "900875001000109000001302009190023058208057103530081060400706800000204000700518004",
                "008907050070040010060501007630000900009000800007400035700603020040070060006104700",
                "000000605000300090080004001040020970000000000031080060900600020010007000504000000",
                "100007090030020008009600500005300900010080002600004000300000010041000007007000300",
                "800000000003600000070090200050007000000045700000100030001000068008500010090000400"];
        }
        fixedGenerator.prototype.genrate = function (board, level) {
            var succeed = false;
            var game;
            var cellValue;
            var levelStr = Sudoku.gameLevel[level];
            if (this[levelStr] != null && this[levelStr].length > 0) {
                var randomIndex = Math.floor(Math.random() * this[levelStr].length);
                game = this[levelStr][randomIndex];

                if (game.length == 81) {
                    for (var r = 0; r < 9; r++) {
                        for (var c = 0; c < 9; c++) {
                            cellValue = parseInt(game.charAt((r * 9) + c));
                            if (this.IsNumeric(cellValue) && cellValue >= 0) {
                                board.setSystemCell(r, c, cellValue);
                            } else
                                return false;
                        }
                    }
                    succeed = true;
                }
            }

            return succeed;
        };
        fixedGenerator.prototype.IsNumeric = function (strChar) {
            var strValidChars = "0123456789";
            var blnResult = true;
            if (strChar.length === 0) {
                return false;
            }
            if (strValidChars.indexOf(strChar) == -1) {
                blnResult = false;
            }
            return blnResult;
        };
        return fixedGenerator;
    })();
    Sudoku.fixedGenerator = fixedGenerator;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var solver = (function () {
        function solver() {
        }
        solver.prototype.solve = function (board) {
            var succeed = false;
            succeed = this.solvebruteForce(board);

            return succeed;
        };
        solver.prototype.solvebruteForce = function (board) {
            var colp = 0;
            var rowp = 0;
            var mValues = null;
            var bestCardinality = 10;

            for (var row = 0; row < 9; row++) {
                for (var col = 0; col < 9; col++) {
                    if (board.cell(row, col) == 0) {
                        var values = Sudoku.analyzer.getPossibleValues(board, row, col);
                        var cardinality = 0;

                        for (var card = 1; card < 10; card++)
                            cardinality += values[card] == 0 ? 0 : 1;

                        if (cardinality < bestCardinality) {
                            bestCardinality = cardinality;
                            mValues = values;
                            colp = col;
                            rowp = row;
                        }
                    }
                }
            }

            if (bestCardinality == 10)
                return true;

            if (bestCardinality == 0)
                return false;

            for (var i = 1; i < 10; i++) {
                if (mValues[i] != 0) {
                    board.setCell(rowp, colp, mValues[i]);
                    if (this.solvebruteForce(board))
                        return true;
                }
            }

            board.setCell(rowp, colp, 0);
            return false;
        };
        return solver;
    })();
    Sudoku.solver = solver;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var analyzer = (function () {
        function analyzer() {
        }
        analyzer.isInRow = function (board, targetCell) {
            for (var row = 0; row < 9; row++) {
                if (board.cell(row, targetCell.y) == targetCell.data)
                    return true;
            }
            return false;
        };

        analyzer.isInColumn = function (board, targetCell) {
            for (var column = 0; column < 9; column++) {
                if (board.cell(targetCell.x, column) == targetCell.data)
                    return true;
            }
            return false;
        };
        analyzer.isInSquare = function (board, targetCell) {
            var square = board.getSubSquare(targetCell.x, targetCell.y);
            if (square.cells != null) {
                for (var c = 0; c < square.cells.length; c++) {
                    if (square.cells[c].data == targetCell.data)
                        return true;
                }
            }
            return false;
        };
        analyzer.getPossibleValues = function (board, pX, pY) {
            var possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            for (var c = 0; c < 9; c++)
                possibleValues[board.cell(pX, c)] = 0;

            for (var r = 0; r < 9; r++)
                possibleValues[board.cell(r, pY)] = 0;

            var square = board.getSubSquare(pX, pY);
            for (var c = 0; c < square.cells.length; c++) {
                possibleValues[square.cells[c].data] = 0;
            }
            return possibleValues;
        };
        return analyzer;
    })();
    Sudoku.analyzer = analyzer;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var config = (function () {
        function config() {
        }
        config.generator = new Sudoku.fixedGenerator();
        config.solver = new Sudoku.solver();
        return config;
    })();
    Sudoku.config = config;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    var game = (function () {
        function game(pLevel) {
            this.level = pLevel;
            this.board = new Sudoku.board();
            this.board.initialize();
        }
        game.prototype.start = function () {
            if (!Sudoku.config.generator.genrate(this.board, this.level))
                throw new Error("The game is unable to please  try again");
        };
        game.prototype.getBoard = function () {
            return Sudoku.sudUtils.getShallowCells(this.board.cells);
        };
        game.prototype.pause = function () {
        };
        game.prototype.resume = function () {
        };
        game.prototype.restart = function () {
        };
        game.prototype.complete = function () {
        };

        game.prototype.solve = function () {
            return Sudoku.config.solver.solve(this.board);
        };
        game.prototype.hint = function (pCell) {
        };
        game.prototype.set = function (pCell, value) {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            if (targetCell.type != 0 /* SYSTEM */) {
                this.board.setCell(pCell.x, pCell.y, value);
                return true;
            } else
                return false;
        };
        game.prototype.get = function (pCell) {
            var targetCell = this.board.getCell(pCell.x, pCell.y);
            return Sudoku.sudUtils.getShallowCell(targetCell);
        };

        game.prototype.on = function (eventType, handler) {
        };
        game.prototype.onRestart = function (handler) {
        };
        game.prototype.onComplete = function (handler) {
        };
        game.prototype.onPause = function (handler) {
        };
        return game;
    })();
    Sudoku.game = game;
})(Sudoku || (Sudoku = {}));

var Sudoku;
(function (Sudoku) {
    function newGame(pLevel) {
        return new Sudoku.game(pLevel);
    }
    Sudoku.newGame = newGame;
})(Sudoku || (Sudoku = {}));
