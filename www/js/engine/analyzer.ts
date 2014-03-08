module Sudoku {
    export class analyzer {
        constructor() {
        }
        static isInRow(board: board, targetCell: cell) {
            for (var row = 0; row < 9; row++) {
                if (board.cell(row,targetCell.y) == targetCell.data)
                    return true;
            }
            return false;
        }

        static isInColumn(board: board, targetCell: cell) {
            for (var column = 0; column < 9; column++) {
                if (board.cell(targetCell.x,column) == targetCell.data)
                    return true;
            }
            return false;
        }
        static isInSquare(board: board, targetCell: cell) {
            var square = board.getSubSquare( targetCell.x, targetCell.y);
            if (square.cells != null) {
                for (var c = 0; c < square.cells.length; c++) {
                    if (square.cells[c].data == targetCell.data)
                        return true;
                }
            }
            return false;
        }
        static getPossibleValues(board: board, pX: number, pY: number):number[] {
            var possibleValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            // Remove used numbers in the vertical direction
            for (var c = 0; c < 9; c++)
                possibleValues[board.cell(pX, c)] = 0;
            // Remove used numbers in the horizontal direction
            for (var r = 0; r < 9; r++)
                possibleValues[board.cell(r,pY)] = 0;
            // Remove used numbers in the sub square.
            var square = board.getSubSquare(pX, pY);
            for (var c = 0; c < square.cells.length; c++) {
                possibleValues[square.cells[c].data] = 0
            }
            return possibleValues;
        }

        /*
        possibilities: {};
        evaluateTotal(a) {
            var b = this.possibilities = {}, c, d, e;
            for (c = 0; 9 > c; c++)
                for (d = 0; 9 > d; d++)
                    if ("" == a.arr[c][d])
                        for (b[c + "" + d] = [], e = 1; 10 > e; e++) board.checkNumber.apply(a, [e, [c, d]]) && b[c + "" + d].push(e);
        return b
    }
        evaluatePosib(a) {
            var b = this.possibilities,
                c, d, e;
            a = a || solver;
            for (c in b)
                for (d = b[c].length; d--;) !1 === board.checkNumber.apply(a, [b[c][d],
                    [c[0] | 0, c[1] | 0]
                ]) && (e = b[c].indexOf(b[c][d]), b[c].splice(e, 1));
        return b
    }
        singleInBox() {
            var a = this.possibilities,
                b = Object.keys(a)[0][0],
                c = this.boxPosib = [{}],
                d;
            for (d in a) d[0] != b && (b = d[0], c.push({})), c[c.length - 1][d] = a[d];
            for (a = c.length; a--;) this.hiddenSingles(c[a])
    }
        singleInRowCol() {
            for (var a = this.possibilities, b = this.colPosib = [], c = this.rowPosib = [], d = 9; d--;) b.push({}), c.push({});
            for (var e in a) {
                var d = 3 * Math.ceil(e[0] % 3) + Math.ceil(e[1] % 3),
                    f = 3 * (Math.ceil(((e[0] | 0) + 1) / 3) - 1) + (Math.ceil(((e[1] | 0) + 1) / 3) - 1);
                b[d][e] = a[e];
                c[f][e] = a[e]
        }
            for (d = 0; 9 > d; d++) this.hiddenSingles(b[d]), this.hiddenSingles(c[d])
    }
        hiddenSingles(a) {
            var b = "",
                c;
            for (c in a) b += a[c].join("");
            for (c in a)
                for (var d = a[c].length; d--;) {
                    var e = a[c][d];
                    if (b.indexOf(e) == b.lastIndexOf(e)) {
                        this.possibilities[c] = [e];
                    break
                }
                }
        }
        nakedPairsTriples() {
            for (var a = 0, b = 9; b--;) a += this.findNakedPairs(this.rowPosib[b]) + this.findNakedPairs(this.colPosib[b]) + this.findNakedPairs(this.boxPosib[b]) + this.findNakedTriples(this.rowPosib[b]) + this.findNakedTriples(this.colPosib[b]) + this.findNakedTriples(this.boxPosib[b]);
        return a
    }
        hiddenPairsTriples() {
            for (var a = 0, b = 9; b--;) a += this.findHiddenPairsTriples(this.rowPosib[b]) + this.findHiddenPairsTriples(this.colPosib[b]) + this.findHiddenPairsTriples(this.boxPosib[b]);
        return a
    }
        findNakedPairs(a) {
            if ("object" != typeof a || 3 > Object.keys(a).length) return 0;
            var b = [],
                c = 0,
                d;
            for (d in a) 2 == a[d].length && b.push(d);
            d = b.length;
            for (var e = 0; e < d; e++)
                for (var f = e + 1; f < d; f++)
                    if (2 == a[b[e]].length && a[b[e]].join("") == a[b[f]].join("")) {
                        var h = a[b[e]].join(""),
                            g;
                        for (g in a)
                            if (g != b[e] && g != b[f])
                                for (var k = a[g].length; k--;) -1 != h.indexOf(a[g][k]) && (c++, this.possibilities[g].splice(k, 1))
                }
        return c
    }
        findNakedTriples(a) {
            if ("object" != typeof a || 4 > Object.keys(a).length) return 0;
            var b = [],
                c = 0,
                d;
            for (d in a) 4 > a[d].length && b.push(d);
            d = [];
            for (var e = b.length, f = 0; f < e; f++)
                for (var h = f + 1; h < e; h++)
                    for (var g = h + 1; g < e; g++) {
                        d.push(b[f], b[h], b[g]);
                        for (var k = "", l = d.length; l--;)
                            for (var m = a[d[l]].length; m--;) {
                                var n = a[d[l]][m]; -1 == k.indexOf(n) && (k += n)
                        }
                        if (3 == k.length)
                            for (l in a)
                                if (-1 == d.indexOf(l))
                                    for (m = a[l].length; m--;) -1 != k.indexOf(a[l][m]) && (c++, this.possibilities[l].splice(m, 1));
                        d.length = 0
                }
        return c
    }
        findHiddenPairsTriples(a) {
            function b(a, b) {
                for (var e = a.length; e--;) c.possibilities[d[a[e]]] = $.extend(!0, [], b)
        }
            var c = this,
                d = [],
                e = "",
                f = [],
                h = 0,
                g;
            for (g in a) d.push(g), e += a[g].join("");
            for (g = 0; g < d.length; g++)
                for (var k = g + 1; k < d.length; k++) {
                    for (var l = f.length = 0; l < a[d[g]].length; l++) {
                        var m = a[d[g]][l];
                        4 < a[d[g]].length + a[d[k]].length && 3 == e.split(m).length && -1 != a[d[k]].indexOf(m) && f.push(m);
                        if (2 == f.length) {
                            h++;
                            b([g, k], f);
                        break
                    }
                    }
                    for (var n = k + 1; n < d.length; n++)
                        for (l = f.length = 0; l < a[d[g]].length; l++)
                            if (m = a[d[g]][l], 9 < a[d[g]].length + a[d[k]].length + a[d[n]].length && 4 == e.split(m).length && -1 != a[d[k]].indexOf(m) && -1 != a[d[n]].indexOf(m) && f.push(m), 3 == f.length) {
                                h++;
                                b([g, k, n], f);
                            break
                        }
                }
        return h
    }

        */

    }
}
