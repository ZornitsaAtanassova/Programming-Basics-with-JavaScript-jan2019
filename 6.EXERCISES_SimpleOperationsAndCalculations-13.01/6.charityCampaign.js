function charityCampaign(input) {
    let dayCount = Number(includa.shift());
    let cakeCount = Number(includa.shift());
    let wafflesCount = Number(includa.shift());
    let pancakesSum = Number(includa.shift());

    let cakeSum = cakeCount * 45;
    let wafflesSum = wafflesCount * 5.80;
    let pancakesSum = pancakesCount * 3.20;

    let totalSum = (cakeSum + wafflesSum + pancakesSum) * bakersCount;

    let result = totalSum - (totalSum * 0.255);
    console.log(result)
}

charityCampaign([20, 8, 14, 30, 16]);