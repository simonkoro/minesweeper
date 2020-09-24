'use strict';
var FLAG = '🚩';
const BOMB = '💣';
var gBoard;

var gLevelEasy = {
    SIZE: 4,
    MINES: 2
};


var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};




function initGame() {
    gBoard = buildBoard();
    renderBoard(gBoard);
}

console.table(buildBoard());

function buildBoard() {
    var size = gLevelEasy.SIZE;
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell();
        }
    }
    board[3][2].isMine = true;
    board[1][1].isMine = true;
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            if (!board[i][j].isMine) {
                board[i][j].minesAroundCount = setMinesNegsCount(i, j, board);
            }
        }
    }
    return board;
}

function createCell() {
    var cell = {
        minesAroundCount: 0,
        isShown: false,
        isMine: false,
        isMarked: true

    };
    return cell;
};



function setMinesNegsCount(cellI, cellJ, board) {
    var minesAround = 0;
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            if (board[i][j].isMine) minesAround++;
        }
    }
    return minesAround;
}

function cellClicked(elCell, i, j) {
    var elCellSpan = elCell.querySelector('span');
    elCellSpan.style.display = 'block';
    console.log(elCell);
    gBoard[i][j].isShown = true;
    console.log(buildBoard());

}

