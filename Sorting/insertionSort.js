function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let j = 1;
        while (j > 0 && arr[j] < ar[j-1]) {
            [arr[j-1], arr[j]] = [array[j], array[j-1]];
        }
        return arr;
    }
}