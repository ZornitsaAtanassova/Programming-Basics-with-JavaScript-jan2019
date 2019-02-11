/* function solve(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());

    if ((num1 > num2 || num2 > num1) && (num1 > 10 && num1 < 100) && num1 % 2 == 0) {
        console.log("True");
    } else {
        console.log("Error");
    }
}

solve([14, 17]);
solve([101, 17]);
solve([51, 17]);
solve([4, 17]); */


function solve1(input) {
    let num1 = Number(input.shift());

    //Obshta logika!!!
    switch (num1) {
        case 1: console.log("One");
        break;
        case 2: console.log("Two");
        case 3:
        case 4: console.log("Four");
        if (num1 % 2 == 0) {
            console.log("Even");
        } else {
            console.log("I'm teapod. I'm 3")
        }
        break;
        default: console.log("I'm teapod");
        break;
    }

    console.log("1 \"2\" 3 \n 4 ");
}

solve1([1]); //One
solve1([2]); //Even
solve1([3]); //
solve1([4]); //Even
