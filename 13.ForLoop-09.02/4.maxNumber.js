function maxNumber(input) {
    //Read first input
    let n = Number(input[0]);
    //console.log(n);

    //Manipulate
    let maxMinValue = Number.MIN_SAFE_INTEGER;  //-9007199254740991
    //console.log(maxMinValue);

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        //console.log(number);
        if (number > maxMinValue) {
            maxMinValue = number;
            //console.log(maxMinValue);
        }
    }

    //Print
    console.log(maxMinValue);
}

maxNumber([2, 100, 99]);      //100
maxNumber([3, -10, 20, -30]);      //20
maxNumber([4, 45, -20, 7, 99]);      //99
maxNumber([1, 999]);      //999
maxNumber([2, -1, -2]);      //-1
