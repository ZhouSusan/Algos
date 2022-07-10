/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// const floodFill = function(image, sr, sc, color) {
    
//     const colorToChange = image[sr][sc];
//     if (colorToChange == color) {
//         return image;
//     }
//     floodFillrec(image,sr,sc,color, colorToChange);
//     return image;
// };

// function floodFillrec(image,sr,sc,color, colorToChange) {
    
//     let neighborList = [];
//     if (image[sr-1] != undefined && image[sr-1][sc] == colorToChange) {
        
//         neighborList.push([sr-1,sc]);
//     }
//     if (image[sr+1] != undefined && image[sr+1][sc] == colorToChange) {
        
//         neighborList.push([sr+1,sc]);
//     }
//     if (image[sr][sc-1] == colorToChange) {
        
//         neighborList.push([sr,sc-1]);
//     }
//     if (image[sr][sc+1] == colorToChange) {
        
//         neighborList.push([sr,sc+1]);
//     }
    
//     image[sr][sc] = color;
    
//     for (const item of neighborList) {
//         console.log(item);
//         floodFillrec(image,item[0],item[1],color,colorToChange);
//     }
// }

let floodFill = function (image, sr,sc,color) {
    let oldColor = image[sr][sc];

    if (color == oldColor) {
        return image;
    }

    image[sr][sc] = color;

    //checking left
    if (image[sr-1] != undefined && image[sr-1][sc] == oldColor) {
        floodFill(image, sr-1, sc, color);
    }

    //checking right
    if (image[sr+1] != undefined && image[sr+1][sc] == oldColor) {
        floodFill(image, sr+1, sc, color);
    }

    //checking up
    if ( image[sr][sc-1] == oldColor) {
        floodFill(image,sr, sc-1, color);
    }

    //checking down
    if (image[sr][sc+1] == oldColor) {
        floodFill(image, sr, sc+1, color);
    }

    return image;
}