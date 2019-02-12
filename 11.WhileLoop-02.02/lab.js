/* function demo(input) {
    let number1 = 0;
    let number2 = 0;

    console.log(number1++);
    console.log(number1);

    console.log(++number2);
    console.log(number2);
}

demo([]); */

/* function demo1(input) {
    let number = 2;

    console.log((2 * 3) + (number++ + 7));  // ((2*3)=6 + number=2 still!=>(2+7)=9) = 6+9=15; already number=3!
    console.log((2 * 3) + (++number + 7));  // already number=3! ((2*3)=6 + now number=(3+1)=>(4+7)=11) = 6+11=17; number=4 still!
    
    console.log(number);
    console.log((number++) + (++number));
    console.log(number); 
    console.log((++number) + (number++));
    console.log(number);
    console.log((++number) + (++number));
    console.log(number);
    console.log((number++) + (number++));
    console.log(number);
}

demo1([]); */

/* function demo2(input) {
    let number = 5;
    let repeateCounter = 0;

    if (number == 4) {
        console.log('Number is 4');
    }
    while (number <= 10) {
        console.log("number = " + number + " repeate: " + repeateCounter);
        number++;
        repeateCounter++;
    }
    console.log('While loop complete');
}

demo2([]); */

/* function demo3(input) {
    let number = Number(input.shift());

    let counterOut = 0;
    while (number) {    //while number has value - verify/check up
        //let counterIn = 0;
        if (!(1 <= number && number <= 100)) {
            console.log(`Number ${number} is NOT in range 1-100! // counter=${counterOut}`);
        } else {
            console.log(`Number ${number} is in range 1-100! // counter=${counterOut}`);
        }

        counterOut++;
        number = Number(input.shift());
    }
    console.log(`counter=${counterOut}`);
}

// When argument 0 while-loop stops ???????????????????
demo3(["7", "101", "7", "-200", "77", "0", "100000000000"]); */

function demo4(input) {     // Break Infinity loop
    let numberToPrint = 1;
    let number = Number(input.shift());

    while (numberToPrint < number) {
        if (numberToPrint % 12 === 0) {
            break;
        }

        console.log(numberToPrint);
        numberToPrint++;
    }
}

demo4(["100"]);
