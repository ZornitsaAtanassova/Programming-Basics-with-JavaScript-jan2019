function minNumber(input) {
    //Read first input
    let n = Number(input[0]);
    //console.log(n);

    //Manipulate
    let minMaxValue = Number.MAX_SAFE_INTEGER;  //9007199254740991
    //console.log(minMaxValue);

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        //console.log(number);
        if (number < minMaxValue) {
            minMaxValue = number;
            //console.log(minMaxValue);
        }
    }

    //Print
    console.log(minMaxValue);
}

minNumber([2, 100, 99]);      //99
minNumber([3, -10, 20, -30]);      //-30
minNumber([4, 45, -20, 7, 99]);      //-20
minNumber([1, 999]);      //999
minNumber([2, -1, -2]);      //-2