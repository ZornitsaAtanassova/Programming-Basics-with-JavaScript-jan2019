function operationBetweenNumbers(input) {
    //Knowns: -Operators: (+),(-),(*),(/),(%)
    //Wanted: -(+),(-),(*) - printing result and even/odd
    //Wanted: -(/) - printing just result
    //Wanted: -(%) - printing residue
    //Wanted: -(/),(%) - Cannot divide by zero!

    //Read
    let firstNumber = Number(input.shift());    //[0-40 000]
    let secondNumber = Number(input.shift());
    let operator = input.shift();   //(+),(-),(*),(/),(%)

    //Manipulate
    let result = 0;

    switch (operator) {
        case "+":
        result = firstNumber + secondNumber;
        if (result % 2 === 0){
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }
        break;

        case "-":
        result = firstNumber - secondNumber;
        if (result % 2 === 0){
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }
        break;

        case "*":
        result = firstNumber * secondNumber;
        if (result % 2 === 0){
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - even`);
        } else {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result} - odd`);
        }
        break;

        case "/":
        result = firstNumber / secondNumber;
        if (secondNumber != 0) {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result.toFixed(2)}`);
        } else {
            console.log(`Cannot divide ${firstNumber} by zero`)
        }
        break;

        case "%":
        result = firstNumber % secondNumber;
        if (secondNumber != 0) {
            console.log(`${firstNumber} ${operator} ${secondNumber} = ${result}`);
        } else {
            console.log(`Cannot divide ${firstNumber} by zero`)
        }
        break;
    }


    // Alternative way ????
    /*if (operator === "+" || operator === "-" || operator === "*") {
        if ()
    } else if (operator === "/" || opener === "%") {

    } */
}

operationBetweenNumbers(["10", "12", "+"]);     //10 + 12 = 22 - even
operationBetweenNumbers(["10", "1", "-"]);     //10 - 1 = 9 - odd
operationBetweenNumbers(["7", "3", "*"]);     //7 * 3 = 21 - odd
operationBetweenNumbers(["123", "12", "/"]);     //123 / 12 = 10.25
operationBetweenNumbers(["10", "3", "%"]);     //10 % 3 = 1
operationBetweenNumbers(["112", "0", "/"]);     //Cannot divide 112 by zero
operationBetweenNumbers(["10", "0", "%"]);     //Cannot divide 10 by zero
