'use strict';
const FLAG = '🚩';
const MINE = '💣';
const WIN = '😎';
const GAME = '😃';
const LOSE = '😱';
var gBoard;

var gLevelEasy = {
    SIZE: 4,
    MINES: 2
};
var gLevelMedium = {
    SIZE: 8,
    MINES: 12
};
var gLevelHard = {
    SIZE: 12,
    MINES: 30
};


var gGame = {
    isOn: false,
    shownCount: 0,
    markedCount: 0,
    secsPassed: 0
};




function initGame(level) {
    var elBtn = document.querySelector('.smiley');
    gBoard = buildBoard(level);
    renderBoard(gBoard);
    elBtn.innerText = GAME;
    // displayCountMines()
    // checkGameOver()
}

// console.table(buildBoard());
// var randomItem = gBoard[Math.floor(Math.random()*gBoard.length)];
// console.log(randomItem);

function buildBoard(level) {
    // var mines = gLevelEasy.MINES; // =2
    
    var size = level;
    var board = [];
    for (var i = 0; i < size; i++) {
        board.push([]);
        for (var j = 0; j < size; j++) {
            board[i][j] = createCell();
        }
    }
    board[1][1].isMine = true;
    board[3][3].isMine = true;
    // randomItem.isMine = true
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
        isMarked: false

    };
    if (cell.isMine) {
        MINE = cell;

    }
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
    // checkGameOver()
    gGame.isOn = true;
    var elCellSpan = elCell.querySelector('span');
    var elBtn = document.querySelector('.smiley');
    elCellSpan.style.display = 'block';
    console.log(gBoard[i][j]);
    gBoard[i][j].isShown = true;
    gGame.shownCount++;

        if (gBoard[i][j].isMine) {
            alert('BOOOOOOOOOM \n you lost buddy ');
            elBtn.innerText = LOSE;
            gGame.isOn = false;
        }
}
// randomMine();
// function randomMine() {
//     var placeMine;
//     var randBoard = [];
//     for (var i = 0; i < (gLevelEasy.MINES * 2); i++) {
//         randBoard.push(getRandomNum(0, 4));

//     }
//     console.log(randBoard);
// }

function cellMarked(elCell, i, j) {
    gGame.isOn = true;
    var elCellSpan = elCell.querySelector('span');
    if (gBoard[i][j].isShown) return;
    if (!gBoard[i][j].isMarked) {
        gBoard[i][j].isMarked = true;
        elCellSpan.style.display = 'block';
        elCellSpan.innerText = FLAG;
        gGame.markedCount++;
        gLevelEasy.MINES--;
        // elCellSpan.innerText = '';
    } else {
        gBoard[i][j].isMarked = false;
        elCellSpan.style.display = 'none';
        gGame.markedCount--;
        if (gBoard[i][j].isMine) {
            elCellSpan.innerText = MINE;
        } else {
            elCellSpan.innerText = gBoard[i][j].minesAroundCount;
        }
    }

    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
}


function expandShown(board, elCell, i, j) {
    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= board.length) continue;
        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (j < 0 || j >= board[i].length) continue;
            if (i === cellI && j === cellJ) continue;
            board[i][j] = cellClicked();
        }
    }
}


// function checkGameOver() {
//     if (gGame.markedCount === gLevelEasy.MINES) {
//         alert('You Won!!!');
//     }

// }


// gGame.shownCount === (gBoard.length - gLevelEasy.MINES) &&