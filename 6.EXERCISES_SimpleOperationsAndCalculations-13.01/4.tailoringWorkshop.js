function tailoringWorkshop(input) {
    let tables = Number(input.shift());
    let tablesLength = Number(input.shift());
    let tablesWidth = Number(input.shift());
    
    let coversArea = tables * (tablesLength + 2 * 0.30) * (tablesWidth + 2 * 0.30);
    let squaresArea = tables * (tablesLength / 2) * (tablesLength / 2);

    let priceInDollars = coversArea * 7 + squaresArea * 9;
    let priceInLeva = priceInDollars * 1.85;

    console.log(`${priceInDollars.toFixed(2)} USD`);
    console.log(`${priceInLeva.toFixed(2)} BGN`);
}

tailoringWorkshop([5, 1.0, 0.50]);