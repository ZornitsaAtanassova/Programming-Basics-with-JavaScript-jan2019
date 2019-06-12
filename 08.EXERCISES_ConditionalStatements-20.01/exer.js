/* function solve(input) {
    let num = Number(input.shift());

    if (num < 0) {
        console.log('Number is negative');
    } else if (num <= 10) {
        console.log('Number is 10 or lower than 10');
    } else if (num <= 100) {
        console.log('Number is 100 or lower than 100');
    } else if (num > 100) {
        console.log('Number is bigger than 100');
    }
}

solve(["-125"]);
solve(["10"]);
solve(["51"]);
solve(["125"]); */


/* function solve1(input) {
    let num = Number(input.shift());
    let word = input.shift();

    if (num === word) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

solve1([7, "7"]); */

function solve2(input) {
    //let num = Number(input.shift());
    let word = input.shift();

   switch (word) {
       case "1" : {
           console.log("one - string");
           break;
       }
       case 10 : {
           console.log("ten - string");
           break;
       }
       case 1 : {
           console.log("one - integer");
       }
       default : {
           console.log("any");
           break;
       }
   }
}

solve2(["1", "1"]);
