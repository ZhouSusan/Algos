//Coding challenge: Calculate the sum of odd numbers greater than 10 and less than 30

let getSumWithConditionals = (num) => {
    let sum = 0; 

    for (let i = 1; i <= 31; i+= 2) {
        if (i > 10 && i < 30) {
            sum += i;
        }
    }

    return sum;
}

console.log(getSumWithConditionals());