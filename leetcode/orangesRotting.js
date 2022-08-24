/**
 * @param {number[][]} grid
 * @return {number}
 */

 const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1]
]

const findOranges = (grid) => {
    let freshOranges = 0; 
    let rottonOranges = [];
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                freshOranges += 1;
            } else if (grid[i][j] == 2) {
                rottonOranges.push([i, j]);
            }
        }
    }
    return [freshOranges, rottonOranges];
}

var orangesRotting = function(grid) {
    
    if (grid.length == 0) {
        return -1; 
    }
    
    let [freshOranges, rottenOranges] = findOranges(grid);
    if (freshOranges == 0) {
        return 0;
    }
    let minutes = 0;
    
    while (rottenOranges.length != 0 && freshOranges > 0) {
        minutes++;
        const size = rottenOranges.length;
        for (let i = 0; i < size; i++) {
            const [currentRow, currentCol] = rottenOranges.shift();
            
            for (const[rowAdded, colAdded] of directions) {
                let updatedRow = currentRow + rowAdded;
                let updatedCol = currentCol + colAdded;
                
                if (grid[updatedRow] && grid[updatedRow][updatedCol] == 1) {
                    grid[updatedRow][updatedCol] = 2;
                    rottenOranges.push([updatedRow, updatedCol]);
                    freshOranges--;
                }
            }
        }
    }
    return freshOranges > 0 ? -1 : minutes; 
};