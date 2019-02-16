function oddEvenSum(input) {
    //Read first input
    let arrayN = Number(input[0]);
    //console.log(arrayN);

    //Global vars
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 1; i <= arrayN; i++) {
        //console.log(i);
        let num = Number(input[i]);
        //console.log(num);
        if (i % 2 == 0) {
            sumEven += num;
            //console.log(sumEven);
        } else {
            sumOdd += num;
        }
    }
    
    // Alternative way
    /* let counter = 0; //counter
    while (counter < arrayN) {
        if (counter % 2 == 0) {
            sumEven += input[counter];
            //console.log(sumEven);
        } else {
            sumOdd += input[counter];
        }
        counter++;
    }*/ 
    let diff = Math.abs(sumEven - sumOdd);
    if (sumEven == sumOdd) {
        console.log("Yes");
        console.log("Sum = " + sumEven);
    } else {        
        console.log("No");
        console.log("Diff = " + diff);
    }
}

oddEvenSum([4, 10, 50, 60, 20]);    //Yes Sum = 70
oddEvenSum([4, 3, 5, 1, -2]);   //No Diff = 1
oddEvenSum([3, 5, 8, 1]);   //No Diff = 2
