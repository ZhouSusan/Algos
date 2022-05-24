let getPositives = (arr) => {
    let postiveArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            postiveArr.push(arr[i]);
        }
    }
    return postiveArr;
}

console.log(getPositives([-5, 10, -3, 12, -9, 5, 90, 0, 1]));// [10, 12, 5, 90, 0]