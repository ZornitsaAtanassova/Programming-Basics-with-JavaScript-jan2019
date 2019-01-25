// lab.js is with pseudo code!


/* function solve(input) {
    console.log(1 + 1 + "4" + 2 + 1);
    console.log(1 + 1 + "4" + (2 + 1));

    let a = Number(input.shift());
    let b = input.shift();
    console.log(a + 1);
    console.log(b + 1);
}

solve(["2", "2"]); */


/* function solve1(input) {
    let a = "5";
    console.log(typeof(a));

    let isTrue = 5 == a;
    console.log(isTrue);
    let isFalse = 5 === a;
    console.log(isFalse);
    let b = 5 <= a;
    console.log(b);
} 

solve1(); */


/* function solve2(input) {
    let isTrue = 5 === "5";
    if(isTrue) {
        console.log("TRUE");
    }
}

solve2(); */


/* function solve3(input) {
    let grade = Number(input.shift());
    if(grade > 5.50) {
        console.log("Excellent");
    }else if(grade == 5.50) {
        console.log("Equal");
    }else {
        console.log("No excellent")
    }
}

solve3(["5.5"]); */


function solve4(input) {
let num = Number(input.shift());
let result = 0;

if(num == 5){
    result = num + num;
    console.log(result);    
}else if(num == 6){
    result = num + num;
    console.log(result);
}
}

solve4(["6"]);