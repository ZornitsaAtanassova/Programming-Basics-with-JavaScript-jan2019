function inchesToCm(input) {
    let inch = Number(input.shift());
    let cm = inch * 2.54;
    console.log(cm.toFixed(2));     // toFixed() is method, witch round up to second char
}

inchesToCm(["5"]);