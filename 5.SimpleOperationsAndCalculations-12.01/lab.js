/*
function readNumber(input) {
    let num_a = Number(input.shift());  // Insuranse for number data type
    let num_b = Number(input.shift());
    console.log(num_a);
    console.log(num_b);
}

readNumber(['1', 'a']);
*/

/*
function solve(input) {
    let a = input.shift();
    console.log(a);
}

solve([]);
*/

/*
function solve(input) {
    let a = 2;
    let b = 10;
    console.log(a);
    console.log(b);
    console.log("result from concatenation = " + a - b);   // For concatenation use + onli
    console.log("result from concatenation = " + a + b);
    console.log("result from operator BRACKETS = " + ( a + b )); // The brackets have priority
    
    let pluse = a + b;
    let minus = a - b;
    let multiplication = a * b;
    let division = a / b;
    console.log("result from ADDITION = " + pluse);
    console.log("result from SUBTRACTION = " + minus);
    console.log("result from MULTIPLICATION = " + multiplication);
    console.log("result from DIVISION = " + division);

    // parseInt is method, which cuts the fraction (drobna chast)
    let divisionParseInt = Number.parseInt( a / b );
    console.log("result from DIVISION and CUT fraction = " + divisionParseInt);
    let sqrt = Math.sqrt(a);
    console.log("result from SQARE ROOT = " + sqrt);
    let module = b % a;     // returns the remainder (ostatyk)
    console.log("result from MODUL devision = " + module);  
}

solve();
*/

function solve(input) {
    let a = -5.55;
    let aParseInt = Number.parseInt(a);     // Same with Math.trunc()
    let aTrunc = Math.trunc(a);     // Same with Number.parseInt()
    let aFloor = Math.floor(a);
    console.log(aParseInt);
    console.log(aTrunc);
    console.log(aFloor);
}

solve();