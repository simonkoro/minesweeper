function renderBoard(board) {
    var strHTML = '';
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        var row = board[i];
        for (var j = 0; j < board[0].length; j++) {
            var cell = row[j];
            var icon = (cell.isMine) ? BOMB : ' ';
            var cellPlace = `cell -${i}-${j}`;
            strHTML += `<td class="${cellPlace}"
             onclick="cellClicked()">${icon}</td>`;
        }
        strHTML += '</tr>';
    }
    var elTable = document.querySelector('.board');
    elTable.innerHTML = strHTML;
}
function renderCell(i, j, val) {
    var elCell = document.querySelector(`.cell -${i}-${j}`);
    elCell.innerText = val;
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



