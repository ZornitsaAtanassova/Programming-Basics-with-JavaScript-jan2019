function sumNumbers(input) {
    //Read first input
    let n = Number(input[0]);   // Dostypvane na variable ot argumenta, kojto priema funkciqta, kato za razlika ot function SHIFT(), dostypvaneto po index ne iztriva the variable from the array!!!
    //console.log(n);

    //Manipulate
    //Auxilary var
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        //console.log(number);
        sum += number;
        //console.log(sum);
    }

    //Print
    console.log(sum);

    // Alternative way
    /* let n = Number(input.shift());

    let sum = 0;

    for (let i = 0; i <= n; i++) {
        let number = Number(input.shift());
        sum += number;
    }

    console.log(sum); */
}

sumNumbers([2, 10, 20]);     //30
sumNumbers([3, -10, -20, -30]);     //-60
sumNumbers([4, 45, -20, 7, 11]);     //43
sumNumbers([1, 999]);     //999
sumNumbers([0]);      //0
