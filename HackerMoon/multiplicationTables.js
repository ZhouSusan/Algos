//Print all the multiplication tables with numbers from 1 to 10

function multiplicationTables() {
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            console.log(`${i} * ${j} =`,  i * j);
        }
    }
}

multiplicationTables();