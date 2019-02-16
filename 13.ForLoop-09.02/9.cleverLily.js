function cleverLily(input) {
    //Knowns: -Lily's birthday present: Odd birthday=>toys; Even birthday=>money - (((age/2) * 10lv.) - 1lv.Brother)
    //Wanted: -To calculate how much money she has collected and whether she can afford to buy her a washing machine?

    //Read inputs
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    //Global vars
    let moneySaved = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            moneySaved += ((i / 2) * 10) - 1;
            //console.log(moneySaved);
        } else {
            toyCount++;
            //console.log(toyCount);
        }
    }
    moneySaved += toyCount * toyPrice;
    //console.log(moneySaved);

    let diff = Math.abs(washingMachinePrice - moneySaved);
    //console.log(diff);
    if (moneySaved > washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLily([10, 170.00, 6]);    //Yes! 5.00
cleverLily([21, 1570.98, 3]);    //No! 997.98
