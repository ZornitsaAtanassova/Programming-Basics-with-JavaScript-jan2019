function oddEvenPosition(input) {
    //Read first input
    let n = Number(input[0]);
    //console.log(n);

    //Global vars
    let oddSum = 0;
    let oddMin = 1000000000;
    let oddMax = -1000000000;
    let evenSum = 0;
    let evenMin = 1000000000;
    let evenMax = -1000000000;
    let no = 'No';

    for (let i = 1; i <= n; i++) {
        //Read remining inputes
        let num = Number(input[i]);

        //Condition for Even/Odd input array index
        if (i % 2 == 0) {   //Even
            evenSum += num;
            if (num < evenMin) {
                evenMin = num;
            }
            if (num > evenMax) {
                evenMax = num;
            }
        } else {    //Odd
            oddSum += num;
            if (num < oddMin) {
                oddMin = num;
            }
            if (num > oddMax) {
                oddMax = num;
            }
        }
    }
    //console.log(evenSum);
    evenMin = evenMin.toFixed(2);
    evenMax = evenMax.toFixed(2);
    oddMin = oddMin.toFixed(2);
    oddMax = oddMax.toFixed(2);

    //Print
    if (n == 0) {   //No any inputs, only first
        oddMin = no;
        oddMax = no;
        evenMin = no;
        evenMax = no;
    } else if (n == 1) {    //No even index
        evenMin = no;
        evenMax = no;
    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}

oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);    //OddSum=9.00, OddMin=2.00, OddMax=5.00, EvenSum=8.00, EvenMin=1.00, EvenMax=4.00
oddEvenPosition([2, 1.5, -2.5]);    //OddSum=1.50, OddMin=1.50, OddMax=1.50, EvenSum=2.50, EvenMin=2.50, EvenMax=-2.50
oddEvenPosition([1, 1]);    //OddSum=1.00, OddMin=1.00, OddMax=1.00, EvenSum=0.00, EvenMin=No, EvenMax=No
oddEvenPosition([0]);    //OddSum=0.00, OddMin=No, OddMax=No, EvenSum=0.00, EvenMin=No, EvenMax=No
oddEvenPosition([5, 3, -2, 8, 11, -3]);    //OddSum=8.00, OddMin=-3.00, OddMax=8.00, EvenSum=9.00, EvenMin=2.00, EvenMax=11.00
oddEvenPosition([4, 1.5, 1.75, 1.5, 1.75]);    //OddSum=3.00, OddMin=1.50, OddMax=1.50, EvenSum=3.50, EvenMin=1.75, EvenMax=1.75
oddEvenPosition([1, -5]);    //OddSum=5.00, OddMin=5.00, OddMax=5.00, EvenSum=0.00, EvenMin=No, EvenMax=No
oddEvenPosition([3, -1, -2, -3]);    //OddSum=4.00, OddMin=3.00, OddMax=1.00, EvenSum=2.00, EvenMin=2.00, EvenMax=2.00
