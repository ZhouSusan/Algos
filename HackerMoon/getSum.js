//Calculate the sum of numbers from 1 to 10

function getSum() {
    let sum = 0;

    for (let i =  1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum());