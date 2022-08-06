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