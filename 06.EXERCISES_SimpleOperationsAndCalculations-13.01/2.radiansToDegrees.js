function radiansToDegrees(input) {
    let = radians = Number(input.shift());
    let degrees = radians * 180 / Math.PI;
    //console.log(Math.PI);   // 3.141592653589793
    console.log(degrees.toFixed(0));
}
radiansToDegrees([3.1416]);