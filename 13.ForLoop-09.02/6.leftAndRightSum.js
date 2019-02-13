function leftAndRightSum(input) {
    //2*n - 2 sides * n numbers there.
    //Wanted: -To calculate is the sum of the first n numbers (in left side) is equal to the sum of the second n numbers (in right side)?
    //Read first input
    let n = Number(input[0]);

    //Calculate sum individually for left and right
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        leftSum += number;
    }
    for (let j = n + 1; j <= n * 2; j++) {
        let number = Number(input[j]);
        rightSum += number;
    }

    //Calculate the difference between the two sides
    let diff = Math.abs(leftSum - rightSum);
    if (diff == 0) {
        console.log("Yes, sum = " + leftSum);
    } else {
        console.log("No, diff = " + diff);
    }

    // Alternative way
/*     let n = Number(input[0]);
    let numbersMaxCount = n * 2;
    let leftSum = 0; 
    let rightSum = 0; 
    for (let i = 1; i <= numbersMaxCount; i++) {
        let userNumber = Number(input[i]);
        if (i <= n) {
            leftSum += userNumber;
        } else {
            rightSum += userNumber;
        }
    }
    
    if (leftSum === rightSum) {
        console.log("Yes, sum = " + leftSum);
    } else {
        let diff = Math.abs(leftSum - rightSum);
        console.log("No, diff = " + diff);
    } */
}

leftAndRightSum(["2", "10", "90", "60", "40"]);     //Yes, sum = 100
leftAndRightSum(["2", "90", "9", "50", "50"]);     //No, diff = 1
