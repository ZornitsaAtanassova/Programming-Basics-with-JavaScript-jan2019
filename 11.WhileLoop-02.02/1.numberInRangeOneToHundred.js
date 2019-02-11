function numberInRange(input) {
    let number = Number(input.shift());

    while (number < 1 || number > 100) {
        console.log("Invalid Number!");
        number = Number(input.shift());
    }
    console.log(`The number is: ${number}`);
}

numberInRange(["35"]);    //The number is: 35
numberInRange(["105"]);    //Invalid number!
numberInRange(["0"]);    //Invalid number!
numberInRange(["-200"]);    //Invalid number!
numberInRange(["77"]);    //The number is: 77
