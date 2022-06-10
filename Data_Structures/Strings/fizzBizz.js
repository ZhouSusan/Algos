let fizzBizz = function(n) {
    for (let i = 0; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log('FizzBizz');
        } else if (i % 5 === 0) {
            console.log('Fizz');
        } else if (i % 3 === 0) {
            console.log('Bizz');
        } else {
            console.log(i);
        }
    }
}

fizzBizz(100);