/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

 var BFS = function (mat, y, x) {
    let currentVal;
    let current;
    let q = [{y, x, dist:0}];
    
    while (q.length > 0) {
        current = q.shift();
        if (mat[current.y] == undefined || mat[current.y][current.x] == undefined) {
            continue;
        }
        
        currentVal = mat[current.y][current.x];
        
        if (currentVal == 0) {
            return current.dist;
        }
        
        q.push({y:current.y+1, x: current.x, dist: current.dist+1});
        q.push({y:current.y, x:current.x+1, dist: current.dist+1});
        q.push({y:current.y-1, x: current.x, dist: current.dist+1});
        q.push({y:current.y, x: current.x-1, dist: current.dist+1});
    }
}

var updateMatrix = function(mat) {
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            mat[i][j] = BFS(mat, i , j);
            }
    }
    return mat;
};

//test cases
const mat1 = [[0,0,0],[0,1,0],[0,0,0]];
const mat2 = [[0,0,0],[0,1,0],[1,1,1]];

console.log(updateMatrix(mat1));// [[0,0,0],[0,1,0],[0,0,0]]
console.log(updateMatrix(mat2));//[[0,0,0],[0,1,0],[1,2,1]]

/**
 * @param {number[][]} mat
 * @return {number[][]}
 
 -create a new matrix with the same dimension of the origial matrix and return
    -> store the distances from the val 0 here
  -create a queue variable 
  -loop through the original matrix
     ->if the val is 0, then place 0 on the same position on the new matrix and add that position on the queue
     -> else place an inifinety value on the same postion on next matrix
  -initialize the distance variable with 1
  -call bfs() on all the position of the queue using a loo[
    -> update its adjacent cells with the current distance only if that cell has a greater distance than current dist 
    Note: this will help us aviod visiting the same coordinates again
 -loop until all queus are empty and increment the distance val 
 */

 const createNewMatrix = (mat) => {
    let newMatrix = new Array(mat.length);
    let q = [];
    
    for (let row = 0; row < mat.length; row++) {
        //Create row array in new matrix
        newMatrix[row] = new Array(mat[row].length); 
        for (let col = 0; col < mat[row].length; col++) {
            if (mat[row][col] == 0) {
                q.push([row, col]);
                newMatrix[row][col] = 0;
            } else {
            //we initialze distance to int for bsf search
                newMatrix[row][col] = Number.POSITIVE_INFINITY;
            }
        }
    }
    return [q, newMatrix];
}

//Checks if the corrdinates of each cell is inbounds of the mat array and its value is not 0.
const isValid = (mat, newMatrix, row, col, currentDistance) => {
    if (row > -1 && row < mat.length && col > -1 && col < mat[row].length && currentDistance < newMatrix[row][col]) {
        return true;
    }
    return false;
}

const updateMatrix2 = (mat) => {
        let [q, newMatrix] = createNewMatrix(mat);
        let coordinates = [[1, 0], [0, 1],[0, -1], [-1, 0]];
        //initial distance 
        let dist = 1;
    
    //BFS for all 0's val
    while (q.length != 0) {
        let currentQueueLength = q.length;
        
        for (let i = 0; i < currentQueueLength; i++) {
            let = [currentRow, currentCol ] = q.shift();
            
            for (let [moveRow, moveCol] of coordinates) {
                //For each coordinate, check if the index that contains 1 has a greater distance than the current. If so, we update the distance for that val.
                moveRow = currentRow + moveRow;
                moveCol = currentCol + moveCol;
                
                if (isValid(mat, newMatrix, moveRow, moveCol, dist)) {
                    //if the moved coordinates is within the bounds and the current dist is less than the distance in that position, we update the distance and pushed it into the queue
                    newMatrix[moveRow][moveCol] = dist;
                    q.push([moveRow, moveCol]);
                }
            }
        }
        dist++;
    }
    return newMatrix;
};