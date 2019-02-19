function equalPairs(input) {
    //Read first input
    let n = Number(input.shift());

    //Global vars
    let diffMax = 0;   //Number.MIN_SAFE_INTEGER;
    let lastPair = 0;

    for (let i = 0; i < n; i++) {
        let num1 = Number(input.shift());
        let num2 = Number(input.shift());
        //console.log(num1);

        let currPair = num1 + num2;
        //console.log(currPair);
    
        if (i > 0) {
            let diff = Math.abs(currPair - lastPair);
            if (diff > diffMax) {
                diffMax = diff;
            }
        }

        lastPair = currPair;
    }

    if (diffMax === 0) {
        console.log(`Yes, value=${lastPair}`);
    } else {
        console.log(`No, maxdiff=${diffMax}`);
    }

}

equalPairs([3, 1, 2, 0, 3, 4, -1]);     //Yes, value=3
equalPairs([2, 1, 2, 2, 2]);     //No, maxdiff=1
equalPairs([4, 1, 1, 3, 1, 2, 2, 0, 0]);     //No, maxdiff=4
equalPairs([1, 5, 5]);     //Yes, value=10
equalPairs([2, -1, 0, 0, -1]);     //Yes, value=-1
equalPairs([2, -1, 2, 0, -1]);     //No, maxdiff=2
