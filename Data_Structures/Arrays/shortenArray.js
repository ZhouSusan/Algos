function shortenArray(arr) {
    var copyArr = arr.slice();
    return copyArr.filter(item => item);
}

let test1 = [1,2,3,4,,,,,];
let test2 = [, , , , "a", true, 4, 4];
let test3 = [1, , 2, , 3, , 4];
let test4 = [, , , , , , ,]

console.log(shortenArray(test1)) //[1,2,3,4]
console.log(shortenArray(test2)) //["a", true, 4, 4]
console.log(shortenArray(test3)) //[1,2,3,4]
console.log(shortenArray(test4));//[]