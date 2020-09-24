

function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        var row = board[i];
        for (var j = 0; j < board[0].length; j++) {
            var cell = row[j];
            var icon = (cell.isMine) ? MINE : board[i][j].minesAroundCount;
            var cellId = `cell-${i}-${j}`;
            strHTML += `<td id ="${cellId}"class="cell"
             onclick="cellClicked(this,${i},${j})"><span>${icon}</span></td>`;
        }
        strHTML += '</tr>';
    }
    var elTable = document.querySelector('.board');
    elTable.innerHTML = strHTML;
}
function renderCell(i, j, value) {
    var elCell = document.querySelector(`.cell -${i}-${j}`);
    elCell.innerText = value;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

