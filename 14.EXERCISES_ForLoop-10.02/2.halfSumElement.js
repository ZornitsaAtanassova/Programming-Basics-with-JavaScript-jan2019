function halfSumElment(input) {
    //Read first input
    let n = Number(input[0]);
    //console.log(n);

    //Global vars
    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    let diff = 0;

    for (let i = 1; i <= n; i++) {
        //Read remining inputs
        let num = Number(input[i]);
        //console.log(num);
        if (num > maxNum) {
            maxNum = num;
        }
        sum += num;
    }
    //console.log(maxNum);
    //console.log(sum);
    sum -= maxNum;
    //console.log(sum);

    if (sum == maxNum) {
        console.log("Yes");
        console.log("Sum = " + sum);
    } else {
        diff = Math.abs(sum - maxNum);
        console.log("No");
        console.log("Diff = " + diff);
    }
}

halfSumElment([7, 3, 4, 1, 1, 2, 12, 1]);  //Yes Sum = 12 
halfSumElment([4, 6, 1, 2, 3]);  //Yes Sum = 6
halfSumElment([3, 1, 1, 10]);  //No Diff = 8
halfSumElment([3, 5, 5, 1]);  //No Diff = 1
halfSumElment([3, 1, 1, 1]);  //No Diff = 1
