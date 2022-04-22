function extractDigit(num,digitNum){
    if (digitNum <= 0) {

        let numArr = num.toString().split('.');
        console.log(numArr[0][numArr[0].length-1]);
        if (digitNum === 0) {
            return numArr[0][numArr[0].length-1];
        }
        return numArr[1][Math.abs(digitNum) - 1];
    } else {
    
    if (digitNum === 0) {
        return num.toString()[num.toString().length-1];
    }
    return num.toString()[digitNum-1];
    }
}

extractDigit(1824, 2)//to return 8

extractDigit(1824,0) //to return 4

extractDigit(1234.56,-1) //to return 5

extractDigit(199.35, 0) //to return 9

extractDigit(199.35, -1) //to return 3

extractDigit(199.35, -2) //to return 5