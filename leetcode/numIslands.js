/**
 * @param {character[][]} grid
 * @return {number}
 
 We have two edge cases: Four Egdes of the grid are all surrounded by water 
 Note: should avoid infinite recursion 
 -the number of the grids are made up as strings not numbers
 
 Loop hrough every cell, and when we hit a land we know we are on the island
 We will visit all the cells that "1" is connected to it
 Once we visited all the 1's connected to this cell, increase islandCount variable
 */


 const numIslands = (grid) => {

    if (grid.length == 0) {
        return 0;
    }
      
    let gridLength = grid.length;
    let rowsLength = grid[0].length; 
    let islandCount = 0;
      
    //dfs search: look in all directions and set the current cell to 0-> prevent infinite recurrsion   
    const dfs = (i, j) => {
        if (grid[i][j] == "1") {
            grid[i][j] = "0";
                if (i - 1 >= 0) {//up
                    dfs(i-1, j);
                }
                if (i + 1 < gridLength) {//down
                    dfs(i+1, j);
                }
                if (j - 1 >= 0) { //left
                    dfs(i, j-1);
                }
                if (j + 1 < rowsLength) {//right
                    dfs(i, j+1);
                }
            }
       }
  
    for (let i = 0; i < gridLength; i++) {
        for (let j = 0; j < rowsLength; j++) {
            if (grid[i][j] == "1") {
                dfs(i, j);
                islandCount++;
            }
        }
    }
      
    return islandCount;
  
  };