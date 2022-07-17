/*
Write a function (or small set of functions) that, given an integer, prints an
arrow of that height. Here are a few examples for different inputs:

Input is 1:
>

Input is 2:
\
/

Input is 3:
\
>
/

Input is 4:
\
 \
 /
/

Input is 5:
\
 \
  >
 /
/
*/

var arrow = function(n) {
    let arrow = [];
    //add > if odd
    if (n % 2 == 1) {
        arrow.push(">")
        n--
    }

    //populate array with slashes
    while (n > 0) {
        arrow.unshift("\\")
        arrow.push('/')
        n = n -2;
    }

    //add the spaces
    let x = 0
    let y = arrow.length -1
    let count = 0
    while(x <= y) {
        if (x == y) {
            for (let z = 0; z < count; z++) {
                arrow[x] = " " + arrow[x]
            }
            break;
        }
        for (let z = 0; z < count; z++) {
            arrow[x] = " " + arrow[x]
            arrow[y] = " " + arrow[y]
        }
        x++
        y--
        count++
    }

    //print eveyrthing
    for (let i = 0; i < arrow.length; i++) {
        console.log(arrow[i]);
    }
};

arrow(1);
arrow(2);
arrow(3);
arrow(4);
arrow(5);