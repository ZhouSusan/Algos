
function threesFives(num){
    let sum = 0;
 
    while (num > 0) {

        if (num % 3 === 0 || num % 5 === 0) {
            num--;
            continue;
        }
        sum += num;
        num--;

    }
    console.log(sum);
    return sum;
}
console.log(threesFives(10))