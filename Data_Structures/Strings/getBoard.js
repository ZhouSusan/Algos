/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # */

function getBoard() {
    var board = '';
    var size = 8;

    for (var row = 0; row <= size; row += 1) {
        for (var col = 0; col <= size; col += 1) {
        if (row % 2 === 0) {
            if (col % 2 === 0) {
                board += ' ';
            } else {
                board += '#';
            }
        } else {
            if (col % 2 === 0) {
                board += '#';
            } else {
                board += ' ';
            }
        }
        }
        board += '\n';
    }
return board;
}
console.log(getBoard());