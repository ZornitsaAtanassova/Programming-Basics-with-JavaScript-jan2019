function toyShop(input) {
    // Knowns: -Order in toy shop: Puzzle(2.60lv), TalkingDoll(3lv), TedyBear(4.10lv), Minion(8.20lv), Truck(2lv) in BGN.
    // Knowns: -Discount for Up to 50 pieces - 25%/total sum.
    // Knowns: -Rent the store - 10%.
    // Wanted: -To calculates the profit from the order.

    // Read
    let excursinPrice = Number(input.shift());
    let puzzleCount = Number(input.shift());
    let tolkingDollCount = Number(input.shift());
    let tedyBearCount = Number(input.shift());
    let minionCount = Number(input.shift());
    let truckCount = Number(input.shift());

    // Manipulate
    let orderSum = (puzzleCount * 2.60) + (tolkingDollCount * 3) + (tedyBearCount * 4.10) + (minionCount * 8.20) + (truckCount * 2);
    //console.log(orderSum);
    let orderToyCount = puzzleCount + tolkingDollCount + tedyBearCount + minionCount + truckCount;
    //console.log(orderToyCount);
    let discount = 0.0;
    
    if (orderToyCount >= 50) {
        discount = orderSum * 0.25;
    }
    let totalSum = orderSum - discount;
    totalSum = totalSum - (totalSum * 0.10);

    if (excursinPrice <= totalSum) {
        let result = totalSum - excursinPrice;
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    }else {
        let result = Math.abs(excursinPrice - totalSum);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
    }
}

toyShop(["40.8", "20", "25", "30", "50", "10"]);      //Yes! 418.20 lv left.
toyShop(["320", "8", "2", "5", "5", "1"]);      //Not enough money! 238.73 lv needed.
