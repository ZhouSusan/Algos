// Write a function isItEmpty that takes in an object or an array and returns true if it is empty, false if not.
// HINT: look up the Object.keys function

function isItEmpty(param) {
    if (Object.keys(param).length === 0) {
        return true;
    }
    if (param.length === 0) {
        return true;
    }
    return false;
}
let emptyObj = {};
let emptyArr = [];
let obj = {example : true};
let arr = [1,2,3];

console.log(isItEmpty(emptyObj));  //true
console.log(isItEmpty(emptyArr));  //true
console.log(isItEmpty(obj));  //false
console.log(isItEmpty(arr));  //false