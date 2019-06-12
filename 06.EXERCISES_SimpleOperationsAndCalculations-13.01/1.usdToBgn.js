function convertor(input) {
    let usd = Number(input.shift());    // Number() - insure for number data
    let bgn = usd * 1.79549;
    console.log(bgn.toFixed(2));    // .toFixed() - is method, witch rounding(to some char) to UPPER value.
}

convertor([20]);