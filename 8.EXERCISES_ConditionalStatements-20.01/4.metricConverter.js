function metricConverter(input) {
    // !!! 1m = 1000mm; 1m = 100cm.

    let value = Number(input.shift());
    let inputMetric = input.shift();
    let outputMetric = input.shift();

    if (inputMetric === "mm") {
        value /= 1000;
    } else if (inputMetric === "cm") {
        value /= 100;
    }

    if (outputMetric === "mm") {
        value *= 1000;
    } else if (outputMetric === "cm") {
        value *= 100;
    } 

    console.log(value.toFixed(3));

    // Alternative way - NOT WORKING???
    /* let valueMM = 0;
    if (inputMetric === 'mm') {
        valueMM = value;
    } else if (inputMetric === 'cm') {
        valueMM = value * 10;
    } else {
        valueMM = value * 1000;
    }
    
    let resultValue = 0;
    if (outputMetric === 'mm') {
        resultValue = value;
    } else if (outputMetric === 'cm') {
        resultValue = valueMM / 10;
    } else {
        resultValue = valueMM / 1000;
    }

    console.log(resultValue.toFixed(3)); */
}

metricConverter(["12", "mm", "m"]);  //0.012
metricConverter(["150", "m", "cm"]);  //15000.000
metricConverter(["45", "cm", "mm"]);  //450.000
