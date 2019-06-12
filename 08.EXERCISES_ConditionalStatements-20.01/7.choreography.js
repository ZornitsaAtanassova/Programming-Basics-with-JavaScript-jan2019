function choreography(input) {
    let steps = Number(input.shift());
    let dancers = Number(input.shift());
    let days = Number(input.shift());

    let totalStepsPerDay = (steps / days) / steps;
    totalStepsPerDay *= 100;
    totalStepsPerDay = Math.ceil(totalStepsPerDay);
    //console.log(totalStepsPerDay);
    let stepsPerDanser = totalStepsPerDay / dancers;
    //console.log(stepsPerDanser);

    if (totalStepsPerDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${stepsPerDanser.toFixed(2)}%.`);
    } else {
        console.log(`No, they will not succeed in that goal! Required ${stepsPerDanser.toFixed(2)}% steps to be learned per day.`);
    }
}

choreography(["10464", "20", "20"]);   //Yes, they will succeed in that goal! 0.25%.
choreography(["55555", "30", "7"]);   //No, they will not succeed in that goal! Required 0.50% steps to be learned per day.
