function charityCampaign(input) {
    // !!! 1/8 = 0.125 or (1 - (1/8)) = 0.875 it is same as 1.00 100% 7/8 -> 87.5%

    // Knowns: -Charity campaign in confectionery: Days, Bakers in count.
    // Knowns: -Cakes, Waffles, Pancakes in count for baker/day.
    // Knowns: -Cakes, Waffles, Pancakes in sum. Product costs in parcent.
    // Wanted: -To calculate the money collected at the end of the campaign? x.toFixed(2)!

    // Read
    let daysCount = Number(input.shift());
    let bakersCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let wafflesCount = Number(input.shift());
    let pancakesCount = Number(input.shift());

    // Manipulate
    let cakesSum = cakesCount * 45;
    //console.log(cakesSum);
    let wafflesSum = wafflesCount * 5.80;
    let pancakesSum = pancakesCount * 3.20;
    let sumOfTheDay = (cakesSum + wafflesSum + pancakesSum) * bakersCount;
    //console.log(totalSum.toFixed(2));

    let totalSum = sumOfTheDay * daysCount;
    //console.log(sumOfTheDay);
    let result = totalSum - (totalSum / 8); 
    //let result = totalSum * 0.875;    // Alternative way
    //let result = totalSum - (totalSum * 0.125);   // Another alternative way

    // Print
    console.log(result.toFixed(2));
}

charityCampaign([20, 8, 14, 30, 16]);   //119728.00