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
    // var randI = getRandomNum(0, gLevelEasy.SIZE);
    // var randJ = getRandomNum(0, gLevelEasy.SIZE);
    // console.log(randI);
    // // setMinesNegsCount()
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell();
        }
    }
    board[3][2].isMine = true;
    board[1][1].isMine = true;
    return board;
}

function createCell() {
    var cell = {
        minesAroundCount: 0,
        isShown: true,
        isMine: false,
        isMarked: true

    };
    return cell;
};


function cellClicked(elCell, i, j) {
    if (gBoard[i][j] !== BOMB) {

    }
}


