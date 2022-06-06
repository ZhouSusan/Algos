function ticTacToeBoard() {
	var board = '';
	var size = 4
	
    for (var row = 0; row <= size; row += 1) {
		for (var column = 0; column <= size; column += 1) {
			if (row % 2 === 0) {
				if (column % 2 === 0) {
					board += '   ';
				} else {
					board += '|'
				}	
			} else {
				if (column % 2 === 0) {
				    board += '----';
				} else {
					board += '';
				}		
			}
		}
		board += '\n';
	}
	return board;
}

console.log(ticTacToeBoard());