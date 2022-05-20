function addTwoStrings(num1, num2) {
    let sum = "";
    let total = parseInt(num1) + parseInt(num2);
    sum += total.toString();
    return sum;
}

console.log(addTwoStrings("2", "4"));//6