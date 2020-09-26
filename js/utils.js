// var gIcon = renderIcon();

function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        var row = board[i];
        for (var j = 0; j < board[0].length; j++) {
            var cell = row[j];
            if (board[i][j].isMine) {
                cell = MINE;
            } else if (board[i][j].isMarked) {
                cell = FLAG;
            } else {
                cell = board[i][j].minesAroundCount;
            }
            // var icon = (cell.isMine) ? MINE : board[i][j].minesAroundCount; //|| (cell.isMarked) ? FLAG : board[i][j].minesAroundCount;
            var cellId = `cell-${i}-${j}`;
            strHTML += `<td id ="${cellId}"class="cell"
             onclick="cellClicked(this,${i},${j})" oncontextmenu="cellMarked(this,${i},${j})"><span>${cell}</span></td>`;
        }
        strHTML += '</tr>';
    }
    var elTable = document.querySelector('.board');
    elTable.innerHTML = strHTML;
}
function renderCell(i, j, value) {
    var elCell = document.querySelector(`.cell-${i}-${j}`);
    elCell.innerText = value;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function displayCountMines(){
//     var elMine = document.querySelector('.bomb')
//     elMine.innerText = `💣 Left : ${gLevelEasy.MINES}`
// }