function alcoholExchange(input) {
    // Knowns: -Alcohol exchange provides: Beer, Wine, Rakia, Whiskey in liters. And Whiskey in price (BGN/liter).
    // Knowns: -The price of Rakia is half lower that of whiskey;
    // Knowns: -The price of Wine is 40% lower that of rakia;
    // Knowns: -The price of Beer is 80% lower that of rakia;
    // Wanted: -To calculate how much money it takes to pay the bill? x.toFixed(2)!

    // Read
    let whiskeyPrice = Number(input.shift());
    let beerLiter = Number(input.shift());
    let wineLiter = Number(input.shift());
    let rakiaLiter = Number(input.shift());
    let whiskeyLiter = Number(input.shift());

    // Manipulate
    let rakiaPrice = whiskeyPrice / 2;
    //console.log(rakiaPrice);
    let winePrice = rakiaPrice - (0.4 * rakiaPrice);
    //let winePrice = rakiaPrice * 0.60;    // Alternative way.
    let beerPrice = rakiaPrice - (0.8 * rakiaPrice);
    //let beerPrice = rakiaPrice * 0.20;  // Alternative way.

    let rakiaSum = rakiaLiter * rakiaPrice;
    //console.log(rakiaSum);
    let wineSum = wineLiter * winePrice;
    let beerSum = beerLiter * beerPrice;
    let whiskeySum = whiskeyLiter * whiskeyPrice;

    let result = rakiaSum + whiskeySum + wineSum + beerSum;

    // Print
    console.log(result.toFixed(2));
}

alcoholExchange([50, 10, 3.5, 6.5, 1]);   //315.00
alcoholExchange([63.44, 3.57, 6.35, 8.15, 2.5]);    //560.62